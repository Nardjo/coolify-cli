# coolify-cli

CLI for the Coolify self-hosted deployment platform. Made with [api2cli.dev](https://api2cli.dev).

## Install

```bash
npx api2cli install Nardjo/coolify-cli
```

This clones the repo, builds the CLI, links it to your PATH, and installs the AgentSkill to your coding agents.

## Install AgentSkill only

```bash
npx skills add Nardjo/coolify-cli
```

## Setup

```bash
coolify-cli auth set "<your-coolify-api-token>"
coolify-cli auth test
coolify-cli --help
```

## Resources

| Resource | Commands |
|----------|----------|
| `applications` | list, get, logs, start, stop, restart |
| `databases` | list, get, stop, restart |
| `servers` | list, get |
| `services` | list, get, logs, start, stop, restart |
| `deployments` | list, get, logs |
| `teams` | list, get |
| `projects` | list, get |
| `version` | get |

## Examples

```bash
# List all applications
coolify-cli applications list --json

# Get app by UUID
coolify-cli applications get <uuid> --json

# Get app logs
coolify-cli applications logs <uuid> --json

# Restart an application
coolify-cli applications restart <uuid> --json

# List all services
coolify-cli services list --json

# Check deployment history
coolify-cli deployments list --json
```

## Global Flags

All commands support: `--json`, `--format <text|json|csv|yaml>`, `--verbose`, `--no-color`, `--no-header`

## Coolify API Token

Generate an API token in Coolify: Settings → API Tokens → New Token.

Requires Coolify v4+. Base URL: `http://<your-coolify-host>:8000/api/v1`
