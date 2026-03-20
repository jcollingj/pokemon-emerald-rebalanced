interface HomePageProps {
  navigate: (path: string) => void;
  openTab: (type: string, params?: Record<string, any>) => void;
}

export function HomePage({ openTab }: HomePageProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Pokemon Emerald Rebalanced</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Game database. Use the sidebar to open any section as a tab.
        </p>
      </div>

      <div className="text-sm text-muted-foreground space-y-1 bg-card border rounded-lg p-4">
        <p className="font-medium text-foreground mb-2">Quick tips</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Click a sidebar item to open it in a new tab</li>
          <li>Switch between open tabs at the top (like browser tabs)</li>
          <li>Close tabs with the X button</li>
          <li>Use <span className="mono text-xs bg-muted px-1 rounded">Cmd+/</span> to focus search in any list</li>
          <li>Arrow keys navigate lists, Enter selects</li>
        </ul>
      </div>
    </div>
  );
}
