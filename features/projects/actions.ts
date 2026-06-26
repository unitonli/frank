"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  createProject,
  getWorkspaceState,
  saveWorkspacePath,
  touchProject,
} from "@/lib/workspace/projects";

export async function configureWorkspace(formData: FormData) {
  const workspacePath = String(formData.get("workspacePath") ?? "");

  await saveWorkspacePath(workspacePath);
  revalidatePath("/");
  redirect("/");
}

export async function createProjectAction(formData: FormData) {
  const state = await getWorkspaceState();

  if (!state.workspacePath) {
    redirect("/");
  }

  await createProject(state.workspacePath, {
    name: String(formData.get("name") ?? ""),
    description: String(formData.get("description") ?? ""),
  });

  revalidatePath("/");
}

export async function openProjectAction(formData: FormData) {
  const state = await getWorkspaceState();
  const projectId = String(formData.get("projectId") ?? "");

  if (!state.workspacePath || !projectId) {
    redirect("/");
  }

  await touchProject(state.workspacePath, projectId);
  revalidatePath("/");
  redirect(`/?project=${encodeURIComponent(projectId)}`);
}
