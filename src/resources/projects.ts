import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface ActionOpts {
  json?: boolean;
  format?: string;
}

export const projects = new Command("projects")
  .description("Manage Coolify projects");

projects
  .command("list")
  .description("List all projects")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (opts: ActionOpts) => {
    try {
      const data = await client.get("/projects");
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

projects
  .command("get")
  .description("Get project by UUID")
  .argument("<uuid>", "Project UUID")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/projects/${uuid}`);
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
