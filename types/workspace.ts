export interface FrankConfig {
  workspacePath: string;
}

export interface ProjectMetadata {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  lastOpenedAt: string | null;
}

export interface WorkspaceState {
  workspacePath: string | null;
  projects: ProjectMetadata[];
}
