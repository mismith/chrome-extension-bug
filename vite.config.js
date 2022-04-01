import { defineConfig } from "vite";
import { chromeExtension } from "rollup-plugin-chrome-extension";

import manifest from "./src/manifest.json";

export default defineConfig({
	build: {
		rollupOptions: {
			input: "./src/manifest.json",
		},
	},
	plugins: [
		chromeExtension({
			manifest,
			contentScripts: { preambleCode: false },
		}),
	],
});
