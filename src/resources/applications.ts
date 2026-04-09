import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface ActionOpts {
  json?: boolean;
  format?: string;
}

export const applications = new Command("applications")
  .description("Manage Coolify applications");

applications
  .command("list")
  .description("List all applications")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .option("--limit <n>", "Limit results", "100")
  .action(async (opts: ActionOpts & { limit?: string }) => {
    try {
      const data = await client.get("/applications", { limit: opts.limit });
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

applications
  .command("get")
  .description("Get application by UUID")
  .argument("<uuid>", "Application UUID")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/applications/${uuid}`);
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

applications
  .command("logs")
  .description("Get application logs by UUID")
  .argument("<uuid>", "Application UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/applications/${uuid}/logs`);
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

applications
  .command("start")
  .description("Start an application by UUID")
  .argument("<uuid>", "Application UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.post(`/applications/${uuid}/start`, {});
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

applications
  .command("stop")
  .description("Stop an application by UUID")
  .argument("<uuid>", "Application UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.post(`/applications/${uuid}/stop`, {});
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

applications
  .command("restart")
  .description("Restart an application by UUID")
  .argument("<uuid>", "Application UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.post(`/applications/${uuid}/restart`, {});
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
