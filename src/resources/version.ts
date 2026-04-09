import { Command } from "commander";
import { client } from "../lib/client.js";
import { output } from "../lib/output.js";
import { handleError } from "../lib/errors.js";

interface ActionOpts {
  json?: boolean;
}

export const version = new Command("version")
  .description("Get Coolify server version");

version
  .action(async (opts: ActionOpts) => {
    try {
      const data = await client.get("/version");
      output(data, { json: opts.json });
    } catch (err) {
      handleError(err, opts.json);
    }
  });
