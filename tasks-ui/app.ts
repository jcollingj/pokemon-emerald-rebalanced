interface Task {
  id: string;
  name: string;
  description: string;
  status: string;
  type: string;
  priority: string;
  pokemon?: string;
  chunk?: string;
  tags?: string[];
  created?: string;
  updated?: string;
  body: string;
}

const STATUSES = ["todo", "in-progress", "done", "blocked"] as const;
const STATUS_LABELS: Record<string, string> = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
  blocked: "Blocked",
};

let tasks: Task[] = [];
let activeFilter: { key: string; value: string } | null = null;
let viewMode: "board" | "list" = "board";

async function fetchTasks(): Promise<Task[]> {
  const res = await fetch("/api/tasks");
  return res.json();
}

async function fetchDesignDoc(pokemon: string): Promise<string | null> {
  const res = await fetch(`/api/design-doc/${encodeURIComponent(pokemon)}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.content;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderSummary(tasks: Task[]): string {
  const counts: Record<string, number> = { todo: 0, "in-progress": 0, done: 0, blocked: 0 };
  tasks.forEach((t) => counts[t.status]++);

  return `<div class="summary-bar">
    ${Object.entries(counts)
      .map(
        ([status, count]) =>
          `<div class="summary-item">
            <div class="summary-dot" style="background: var(--${status})"></div>
            <span>${STATUS_LABELS[status]}: ${count}</span>
          </div>`
      )
      .join("")}
    <div class="summary-item" style="color: var(--text-dim)">Total: ${tasks.length}</div>
  </div>`;
}

function renderFilters(): string {
  const allChunks = [...new Set(tasks.map((t) => t.chunk).filter(Boolean))] as string[];
  const allTypes = [...new Set(tasks.map((t) => t.type))];

  const isActive = (key: string, value: string) =>
    activeFilter?.key === key && activeFilter?.value === value ? "active" : "";

  return `<div class="filters">
    <button class="filter-btn ${!activeFilter ? "active" : ""}" data-filter-clear>All</button>
    ${STATUSES.map(
      (s) =>
        `<button class="filter-btn ${isActive("status", s)}" data-filter-key="status" data-filter-value="${s}">${STATUS_LABELS[s]}</button>`
    ).join("")}
    <span style="border-left: 1px solid var(--border); margin: 0 4px;"></span>
    ${allTypes.map(
      (t) =>
        `<button class="filter-btn ${isActive("type", t)}" data-filter-key="type" data-filter-value="${t}">${t}</button>`
    ).join("")}
    ${
      allChunks.length
        ? `<span style="border-left: 1px solid var(--border); margin: 0 4px;"></span>
       ${allChunks.map(
         (c) =>
           `<button class="filter-btn ${isActive("chunk", c)}" data-filter-key="chunk" data-filter-value="${c}">${c}</button>`
       ).join("")}`
        : ""
    }
    <div class="view-toggle">
      <button class="filter-btn ${viewMode === "board" ? "active" : ""}" data-view="board">Board</button>
      <button class="filter-btn ${viewMode === "list" ? "active" : ""}" data-view="list">List</button>
    </div>
  </div>`;
}

function filterTasks(tasks: Task[]): Task[] {
  if (!activeFilter) return tasks;
  return tasks.filter((t) => {
    const val = (t as Record<string, unknown>)[activeFilter!.key];
    return val === activeFilter!.value;
  });
}

function renderCard(task: Task): string {
  return `<div class="card" data-task-id="${task.id}">
    <div class="card-id">#${task.id}</div>
    <div class="card-name">${escapeHtml(task.name)}</div>
    <div class="card-description">${escapeHtml(task.description)}</div>
    <div class="card-tags">
      <span class="tag tag-type" data-type="${task.type}">${task.type}</span>
      <span class="tag tag-priority" data-priority="${task.priority}">${task.priority}</span>
      ${task.pokemon ? `<span class="tag tag-pokemon">${escapeHtml(task.pokemon)}</span>` : ""}
      ${task.chunk ? `<span class="tag tag-chunk">${escapeHtml(task.chunk)}</span>` : ""}
    </div>
  </div>`;
}

function renderBoard(filtered: Task[]): string {
  return `<div class="board-container">
    ${STATUSES.map((status) => {
      const columnTasks = filtered.filter((t) => t.status === status);
      return `<div class="column">
        <div class="column-header">
          <div class="column-dot" style="background: var(--${status})"></div>
          <span class="column-title">${STATUS_LABELS[status]}</span>
          <span class="column-count">${columnTasks.length}</span>
        </div>
        ${
          columnTasks.length
            ? columnTasks.map(renderCard).join("")
            : `<div class="empty-state"><p>No tasks</p></div>`
        }
      </div>`;
    }).join("")}
  </div>`;
}

function renderList(filtered: Task[]): string {
  return `<div class="list-container">
    <table class="list-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Name</th>
          <th>Type</th>
          <th>Pokemon</th>
          <th>Chunk</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        ${filtered
          .map(
            (t) => `<tr data-task-id="${t.id}">
            <td><span class="card-id">#${t.id}</span></td>
            <td><span class="status-badge" data-status="${t.status}">${STATUS_LABELS[t.status]}</span></td>
            <td><span class="tag tag-priority" data-priority="${t.priority}">${t.priority}</span></td>
            <td>${escapeHtml(t.name)}</td>
            <td><span class="tag tag-type" data-type="${t.type}">${t.type}</span></td>
            <td>${t.pokemon ? escapeHtml(t.pokemon) : "-"}</td>
            <td>${t.chunk ? escapeHtml(t.chunk) : "-"}</td>
            <td style="color: var(--text-dim)">${t.updated || "-"}</td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>
  </div>`;
}

function markdownToHtml(md: string): string {
  // Strip frontmatter
  md = md.replace(/^---\n[\s\S]*?\n---\n?/, "");

  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/\n\n/g, "<br><br>");
}

async function showModal(taskId: string) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  let designDocHtml = "";
  if (task.pokemon) {
    const doc = await fetchDesignDoc(task.pokemon);
    if (doc) {
      designDocHtml = `<div class="design-doc">
        <h3 style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim); margin-bottom: 12px;">Design Document</h3>
        <div class="modal-body">${markdownToHtml(doc)}</div>
      </div>`;
    }
  }

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `<div class="modal">
    <div class="modal-header">
      <div>
        <div class="modal-id">#${task.id}</div>
        <div class="modal-name">${escapeHtml(task.name)}</div>
      </div>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-meta">
      <span class="status-badge" data-status="${task.status}">${STATUS_LABELS[task.status]}</span>
      <span class="tag tag-type" data-type="${task.type}">${task.type}</span>
      <span class="tag tag-priority" data-priority="${task.priority}">${task.priority}</span>
      ${task.pokemon ? `<span class="tag tag-pokemon">${escapeHtml(task.pokemon)}</span>` : ""}
      ${task.chunk ? `<span class="tag tag-chunk">${escapeHtml(task.chunk)}</span>` : ""}
    </div>
    <div class="modal-section">
      <h3>Description</h3>
      <p>${escapeHtml(task.description)}</p>
    </div>
    ${task.created ? `<div class="modal-section"><h3>Created</h3><p>${task.created}</p></div>` : ""}
    ${task.body ? `<div class="modal-section"><h3>Notes</h3><div class="modal-body">${markdownToHtml(task.body)}</div></div>` : ""}
    ${designDocHtml}
  </div>`;

  document.body.appendChild(overlay);

  overlay.querySelector(".modal-close")!.addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

function render() {
  const app = document.getElementById("app")!;
  const filtered = filterTasks(tasks);

  app.innerHTML = `
    <header>
      <h1>Pokemon Emerald Rebalanced <span>/ Task Board</span></h1>
      ${renderSummary(tasks)}
    </header>
    ${renderFilters()}
    ${viewMode === "board" ? renderBoard(filtered) : renderList(filtered)}
  `;

  // Bind filter clicks
  app.querySelectorAll("[data-filter-key]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = (btn as HTMLElement).dataset.filterKey!;
      const value = (btn as HTMLElement).dataset.filterValue!;
      if (activeFilter?.key === key && activeFilter?.value === value) {
        activeFilter = null;
      } else {
        activeFilter = { key, value };
      }
      render();
    });
  });

  app.querySelectorAll("[data-filter-clear]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = null;
      render();
    });
  });

  // Bind view toggle
  app.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      viewMode = (btn as HTMLElement).dataset.view as "board" | "list";
      render();
    });
  });

  // Bind card clicks
  app.querySelectorAll("[data-task-id]").forEach((el) => {
    el.addEventListener("click", () => {
      showModal((el as HTMLElement).dataset.taskId!);
    });
  });
}

async function init() {
  tasks = await fetchTasks();
  render();
}

init();
