import type { ReactNode } from "react";

import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

interface AppShellProps {
  children: ReactNode;
  projectName: string;
}

export function AppShell({ children, projectName }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <Sidebar projectName={projectName} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header projectName={projectName} />
          <main className="workspace-grid flex-1 px-4 py-6 md:px-8 md:py-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
