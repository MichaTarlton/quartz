#!/usr/bin/env node
import { installPlugins, parsePluginSource } from "./gitLoader.js"
import fs from "fs"
import path from "path"
import YAML from "yaml"

async function main() {
  const yamlPath = path.join(process.cwd(), "quartz.config.yaml")
  const defaultYamlPath = path.join(process.cwd(), "quartz.config.default.yaml")
  const configPath = fs.existsSync(yamlPath) ? yamlPath : defaultYamlPath

  let externalPlugins: string[] = []
  if (fs.existsSync(configPath)) {
    try {
      const parsed = YAML.parse(fs.readFileSync(configPath, "utf-8"))
      externalPlugins = parsed?.configuration?.externalPlugins || parsed?.externalPlugins || []
    } catch (e) {
      console.warn("Failed to parse config YAML", e)
    }
  }

  if (externalPlugins.length === 0) {
    console.log("No external plugins to install.")
    return
  }

  console.log(`Installing ${externalPlugins.length} plugin(s) from Git...`)

  const specs = externalPlugins.map((source: string) => parsePluginSource(source))
  const installed = await installPlugins(specs, { verbose: true })

  if (installed.size === externalPlugins.length) {
    console.log("✓ All plugins installed successfully")
  } else {
    console.error(`✗ Only ${installed.size}/${externalPlugins.length} plugins installed`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error("Failed to install plugins:", err)
  process.exit(1)
})
