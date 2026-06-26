export type TaskStatus = "draft" | "ready" | "analyzing";

export interface DesignTask {
  id: string;
  title: string;
  status: TaskStatus;
}
