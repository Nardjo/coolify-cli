import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface ActionOpts {
  json?: boolean;
  format?: string;
}

export const deployments = new Command("deployments")
  .description("Manage Coolify deployments");

deployments
  .command("list")
  .description("List all deployments")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--limit <n>", "Limit results", "50")
  .action(async (opts: ActionOpts & { limit?: string }) => {
    try {
      const data = await client.get("/deployments", { limit: opts.limit });
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

deployments
  .command("get")
  .description("Get deployment by UUID")
  .argument("<uuid>", "Deployment UUID")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/deployments/${uuid}`);
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

deployments
  .command("logs")
  .description("Get deployment logs by UUID")
  .argument("<uuid>", "Deployment UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/deployments/${uuid}/logs`);
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
