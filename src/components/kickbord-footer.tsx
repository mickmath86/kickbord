export function KickbordFooter() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-2 text-center">
        <p className="text-lg font-bold tracking-tight text-foreground">
          Kickbord
        </p>
        <p className="text-sm text-muted-foreground">
          The AI receptionist that never misses a call.
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          &copy; 2026 Fleet Ventures Inc
        </p>
      </div>
    </footer>
  );
}
