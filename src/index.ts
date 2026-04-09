#!/usr/bin/env bun
import { Command } from "commander";
import { globalFlags } from "./lib/config.js";
import { authCommand } from "./commands/auth.js";
import { applications } from "./resources/applications.js";
import { databases } from "./resources/databases.js";
import { servers } from "./resources/servers.js";
import { services } from "./resources/services.js";
import { deployments } from "./resources/deployments.js";
import { teams } from "./resources/teams.js";
import { projects } from "./resources/projects.js";
import { version } from "./resources/version.js";

const program = new Command();

program
  .name("coolify-cli")
  .description("CLI for the Coolify API")
  .version("0.1.0")
  .option("--json", "Output as JSON", false)
  .option("--format <fmt>", "Output format: text, json, csv, yaml", "text")
  .option("--verbose", "Enable debug logging", false)
  .option("--no-color", "Disable colored output")
  .option("--no-header", "Omit table/csv headers (for piping)")
  .hook("preAction", (_thisCmd, actionCmd) => {
    const root = actionCmd.optsWithGlobals();
    globalFlags.json = root.json ?? false;
    globalFlags.format = root.format ?? "text";
    globalFlags.verbose = root.verbose ?? false;
    globalFlags.noColor = root.color === false;
    globalFlags.noHeader = root.header === false;
  });

program.addCommand(authCommand);
program.addCommand(version);
program.addCommand(applications);
program.addCommand(databases);
program.addCommand(servers);
program.addCommand(services);
program.addCommand(deployments);
program.addCommand(teams);
program.addCommand(projects);

program.parse();
