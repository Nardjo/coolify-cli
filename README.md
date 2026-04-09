# coolify-cli

CLI for the coolify API. Made with [api2cli.dev](https://api2cli.dev).

## Install

```bash
npx api2cli install <user>/coolify-cli
```

This clones the repo, builds the CLI, links it to your PATH, and installs the AgentSkill to your coding agents.

## Install AgentSkill only

```bash
npx skills add <user>/coolify-cli
```

## Usage

```bash
coolify-cli auth set "your-token"
coolify-cli auth test
coolify-cli --help
```

## Resources

Run `coolify-cli --help` to see available resources.

## Global Flags

All commands support: `--json`, `--format <text|json|csv|yaml>`, `--verbose`, `--no-color`, `--no-header`
