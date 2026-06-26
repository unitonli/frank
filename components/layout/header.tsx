import { PanelLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/82 px-4 backdrop-blur md:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <Button
          aria-label="Открыть навигацию"
          className="lg:hidden"
          size="icon"
          type="button"
          variant="ghost"
        >
          <PanelLeft className="h-4 w-4" aria-hidden="true" />
        </Button>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Проект</p>
          <p className="truncate text-xs text-muted-foreground">
            Черновик локального AI-инструмента
          </p>
        </div>
      </div>

      <Button type="button" variant="outline">
        <Search className="h-4 w-4" aria-hidden="true" />
        Найти
      </Button>
    </header>
  );
}
