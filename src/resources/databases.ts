import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface ActionOpts {
  json?: boolean;
  format?: string;
}

export const databases = new Command("databases")
  .description("Manage Coolify databases");

databases
  .command("list")
  .description("List all databases")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (opts: ActionOpts) => {
    try {
      const data = await client.get("/databases");
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

databases
  .command("get")
  .description("Get database by UUID")
  .argument("<uuid>", "Database UUID")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/databases/${uuid}`);
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

databases
  .command("stop")
  .description("Stop a database by UUID")
  .argument("<uuid>", "Database UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.post(`/databases/${uuid}/stop`, {});
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

databases
  .command("restart")
  .description("Restart a database by UUID")
  .argument("<uuid>", "Database UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.post(`/databases/${uuid}/restart`, {});
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
