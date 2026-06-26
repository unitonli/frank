import { mkdir, readFile, readdir, stat, writeFile } from "fs/promises";
import { dirname, join } from "path";

import type { FrankConfig, ProjectMetadata, WorkspaceState } from "@/types/workspace";
import {
  getFrankConfigPath,
  getProjectMetadataPath,
  PROJECT_DIRECTORIES,
} from "@/lib/workspace/paths";

const INVALID_PATH_CHARS = /[<>:"/\\|?*\u0000-\u001F]/g;

export async function getWorkspaceState(): Promise<WorkspaceState> {
  const config = await readFrankConfig();

  if (!config) {
    return {
      workspacePath: null,
      projects: [],
    };
  }

  await ensureDirectory(config.workspacePath);

  return {
    workspacePath: config.workspacePath,
    projects: await listProjects(config.workspacePath),
  };
}

export async function saveWorkspacePath(workspacePath: string) {
  const normalizedPath = workspacePath.trim();

  if (!normalizedPath) {
    throw new Error("Workspace path is required.");
  }

  await ensureDirectory(normalizedPath);
  await ensureDirectory(dirname(getFrankConfigPath()));
  await writeJson(getFrankConfigPath(), { workspacePath: normalizedPath });
}

export async function createProject(
  workspacePath: string,
  input: Pick<ProjectMetadata, "name" | "description">,
) {
  const name = input.name.trim();

  if (!name) {
    throw new Error("Project name is required.");
  }

  const projectId = sanitizeProjectFolderName(name);
  const projectPath = join(workspacePath, projectId);

  await ensureDirectory(projectPath);
  await Promise.all(
    PROJECT_DIRECTORIES.map((directory) => ensureDirectory(join(projectPath, directory))),
  );

  const now = new Date().toISOString();
  const metadata: ProjectMetadata = {
    id: projectId,
    name,
    description: input.description.trim(),
    createdAt: now,
    lastOpenedAt: null,
  };

  await writeJson(getProjectMetadataPath(projectPath), metadata);

  return metadata;
}

export async function touchProject(workspacePath: string, projectId: string) {
  const metadataPath = getProjectMetadataPath(join(workspacePath, projectId));
  const metadata = await readJson<ProjectMetadata>(metadataPath);

  if (!metadata) {
    throw new Error("Project not found.");
  }

  await writeJson(metadataPath, {
    ...metadata,
    lastOpenedAt: new Date().toISOString(),
  });
}

async function readFrankConfig(): Promise<FrankConfig | null> {
  return readJson<FrankConfig>(getFrankConfigPath());
}

async function listProjects(workspacePath: string) {
  const entries = await readdir(workspacePath, { withFileTypes: true });
  const projects = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => readProjectMetadata(join(workspacePath, entry.name))),
  );

  return projects
    .filter((project): project is ProjectMetadata => Boolean(project))
    .sort((firstProject, secondProject) =>
      getComparableDate(secondProject).localeCompare(getComparableDate(firstProject)),
    );
}

async function readProjectMetadata(projectPath: string) {
  const metadata = await readJson<ProjectMetadata>(getProjectMetadataPath(projectPath));

  if (!metadata) {
    return null;
  }

  const projectStat = await stat(projectPath);

  if (!projectStat.isDirectory()) {
    return null;
  }

  return metadata;
}

async function readJson<T>(filePath: string): Promise<T | null> {
  try {
    const file = await readFile(filePath, "utf-8");

    return JSON.parse(file) as T;
  } catch {
    return null;
  }
}

async function writeJson(filePath: string, value: unknown) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf-8");
}

async function ensureDirectory(directoryPath: string) {
  await mkdir(directoryPath, { recursive: true });
}

function sanitizeProjectFolderName(projectName: string) {
  return projectName.replace(INVALID_PATH_CHARS, "").trim().replace(/\s+/g, " ");
}

function getComparableDate(project: ProjectMetadata) {
  return project.lastOpenedAt ?? project.createdAt;
}
