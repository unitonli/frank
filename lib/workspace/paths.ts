import { join } from "path";
import { homedir } from "os";

export const PROJECT_DIRECTORIES = [
  "docs",
  "tz",
  "ui",
  "ux",
  "patterns",
  "output",
] as const;

export function getFrankConfigPath() {
  return join(homedir(), ".frank", "config.json");
}

export function getProjectMetadataPath(projectPath: string) {
  return join(projectPath, "project.json");
}
