import {
  BookOpenText,
  FileStack,
  ListTodo,
  Settings,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Документация", icon: BookOpenText },
  { label: "Задачи", icon: ListTodo },
  { label: "Похожие страницы", icon: FileStack },
  { label: "Настройки", icon: Settings },
];

interface SidebarProps {
  projectName: string;
}

export function Sidebar({ projectName }: SidebarProps) {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r bg-white/78 px-4 py-5 backdrop-blur lg:block">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-base font-bold">{projectName}</p>
          <p className="text-xs text-muted-foreground">FRANK Workspace</p>
        </div>
      </div>

      <nav className="space-y-1">
        {navigationItems.map((item) => (
          <a
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            )}
            href="#"
            key={item.label}
          >
            <item.icon className="h-4 w-4" aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
