import {
	defineConfig,
	splitVendorChunkPlugin,
} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigpath from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigpath(),
		splitVendorChunkPlugin(),
	],
	build: {
		target: "es2022",
		minify: true,
		sourcemap: true,
		cssMinify: "esbuild",
		commonjsOptions: {
			strictRequires: true,
		},
		rollupOptions: {
			output: {
				minifyInternalExports: true,
				manualChunks: (id) => {
					if (id.match("node_module") !== null) {
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.toString();
					}
				},
			},
		},
	},
});
