import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface ActionOpts {
  json?: boolean;
  format?: string;
}

export const servers = new Command("servers")
  .description("Manage Coolify servers");

servers
  .command("list")
  .description("List all servers")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (opts: ActionOpts) => {
    try {
      const data = await client.get("/servers");
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

servers
  .command("get")
  .description("Get server by UUID")
  .argument("<uuid>", "Server UUID")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/servers/${uuid}`);
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
