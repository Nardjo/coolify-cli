import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface ActionOpts {
  json?: boolean;
  format?: string;
}

export const services = new Command("services")
  .description("Manage Coolify services (docker-compose based)");

services
  .command("list")
  .description("List all services")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (opts: ActionOpts) => {
    try {
      const data = await client.get("/services");
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

services
  .command("get")
  .description("Get service by UUID")
  .argument("<uuid>", "Service UUID")
  .option("--json", "Output as JSON")
  .option("--format <fmt>", "Output format: text, json, csv, yaml")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/services/${uuid}`);
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

services
  .command("logs")
  .description("Get service logs by UUID")
  .argument("<uuid>", "Service UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.get(`/services/${uuid}/logs`);
      output(data, { json: opts.json, format: opts.format });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

services
  .command("start")
  .description("Start a service by UUID")
  .argument("<uuid>", "Service UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.post(`/services/${uuid}/start`, {});
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

services
  .command("stop")
  .description("Stop a service by UUID")
  .argument("<uuid>", "Service UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.post(`/services/${uuid}/stop`, {});
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });

services
  .command("restart")
  .description("Restart a service by UUID")
  .argument("<uuid>", "Service UUID")
  .option("--json", "Output as JSON")
  .action(async (uuid: string, opts: ActionOpts) => {
    try {
      const data = await client.post(`/services/${uuid}/restart`, {});
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
