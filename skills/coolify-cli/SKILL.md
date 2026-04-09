---
name: coolify
description: "Manage coolify via CLI - {{RESOURCES_LIST}}. Use when user mentions 'coolify' or wants to interact with the coolify API."
category: {{CATEGORY}}
---

# coolify-cli

## When To Use This Skill

Use the `coolify-cli` skill when you need to:

{{WHEN_TO_USE_HELP}}

## Capabilities

Document the actual capabilities of `coolify-cli` after inspecting the generated commands.
Prefer task-oriented bullets over endpoint names.

{{CAPABILITIES_HELP}}

## Common Use Cases

Add concrete, domain-specific requests an agent could solve with this CLI.
Keep them short and action-oriented.

{{USE_CASES_HELP}}

## Setup

If `coolify-cli` is not found, install and build it:
```bash
bun --version || curl -fsSL https://bun.sh/install | bash
npx api2cli bundle coolify
npx api2cli link coolify
```

`api2cli link` adds `~/.local/bin` to PATH automatically. The CLI is available in the next command.

Always use `--json` flag when calling commands programmatically.

## Working Rules

- Always use `--json` for agent-driven calls so downstream steps can parse the result.
- Start with `--help` if the exact action or flags are unclear instead of guessing.
- Prefer read commands first when you need to inspect current state before mutating data.

## Authentication

```bash
coolify-cli auth set "your-token"
coolify-cli auth test
```

Auth commands: `auth set <token>`, `auth show`, `auth remove`, `auth test`

Token is stored in `~/.config/tokens/coolify-cli.txt`.

## Resources

{{RESOURCES_HELP}}

## Output Format

`--json` returns a standardized envelope:
```json
{ "ok": true, "data": { ... }, "meta": { "total": 42 } }
```

On error: `{ "ok": false, "error": { "message": "...", "status": 401 } }`

## Quick Reference

```bash
coolify-cli --help                    # List all resources and global flags
coolify-cli <resource> --help         # List all actions for a resource
coolify-cli <resource> <action> --help # Show flags for a specific action
```

## Global Flags

All commands support: `--json`, `--format <text|json|csv|yaml>`, `--verbose`, `--no-color`, `--no-header`

Exit codes: 0 = success, 1 = API error, 2 = usage error
