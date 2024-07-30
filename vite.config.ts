import { join as joinPath, resolve as resolvePath } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

const projectDirectory = joinPath(fileURLToPath(import.meta.url), "..")

export default defineConfig(() => ({
	build: {
		emptyOutDir: true,
		minify: "esbuild" as const,
		reportCompressedSize: false,
	},
	cacheDir: inProjectDirectory("node_modules/.cache/"),
	plugins: [],
	resolve: {},
	test: {
		coverage: {
			include: ["src/**/*.ts"],
			exclude: ["src/**/*.tests.ts"],
			provider: "v8" as const,
			reportsDirectory: inProjectDirectory(
				"node_modules/.cache/vitest/coverage/",
			),
		},
		include: ["src/**/*.tests.ts"],
		mockReset: true,
	},
}))

function inProjectDirectory(relativePath: string): string {
	return resolvePath(projectDirectory, relativePath)
}
