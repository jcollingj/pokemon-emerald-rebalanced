import { Glob } from "bun";
import index from "./index.html";

interface TaskFrontmatter {
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
  depends_on?: string[];
}

interface Task extends TaskFrontmatter {
  id: string;
  body: string;
}

function parseTask(filename: string, content: string): Task {
  const id = filename.replace(".md", "");
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return {
      id,
      name: id,
      description: "",
      status: "todo",
      type: "pokemon",
      priority: "medium",
      body: content,
    };
  }

  const [, frontmatterStr, body] = match;
  const frontmatter: Record<string, string> = {};

  for (const line of frontmatterStr.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    value = value.replace(/^["']|["']$/g, "");
    frontmatter[key] = value;
  }

  return {
    id,
    name: frontmatter.name || id,
    description: frontmatter.description || "",
    status: frontmatter.status || "todo",
    type: frontmatter.type || "pokemon",
    priority: frontmatter.priority || "medium",
    pokemon: frontmatter.pokemon,
    chunk: frontmatter.chunk,
    created: frontmatter.created,
    updated: frontmatter.updated,
    body: body.trim(),
  };
}

async function loadTasks(): Promise<Task[]> {
  const tasksDir = `${import.meta.dir}/../tasks`;
  const glob = new Glob("[0-9][0-9][0-9].md");
  const tasks: Task[] = [];

  for await (const filename of glob.scan(tasksDir)) {
    const file = Bun.file(`${tasksDir}/${filename}`);
    const content = await file.text();
    tasks.push(parseTask(filename, content));
  }

  tasks.sort((a, b) => a.id.localeCompare(b.id));
  return tasks;
}

async function loadDesignDoc(pokemon: string): Promise<string | null> {
  const docsDir = `${import.meta.dir}/../docs/game-design`;
  const filename = pokemon.toLowerCase().replace(/\s+/g, "-") + ".md";
  const file = Bun.file(`${docsDir}/${filename}`);
  if (await file.exists()) {
    return await file.text();
  }
  return null;
}

Bun.serve({
  port: 3456,
  routes: {
    "/": index,
    "/api/tasks": {
      async GET() {
        const tasks = await loadTasks();
        return Response.json(tasks);
      },
    },
    "/api/tasks/:id": {
      async GET(req) {
        const tasks = await loadTasks();
        const task = tasks.find((t) => t.id === req.params.id);
        if (!task) return new Response("Not found", { status: 404 });
        return Response.json(task);
      },
    },
    "/api/design-doc/:pokemon": {
      async GET(req) {
        const doc = await loadDesignDoc(req.params.pokemon);
        if (!doc) return new Response("Not found", { status: 404 });
        return Response.json({ content: doc });
      },
    },
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log("Tasks UI running at http://localhost:3456");
