import * as path from "path";
import * as fs from "fs";
import { load } from "js-yaml";

const sourceDir = "./src/pureUI/icons/";
const targetDir = "./public/icons/";
const configFile: any = fs.readFileSync("./pureIcons.config.json");

export function processIcons() {
	let subdirs: string[] = [];
	const configPath = "./pureIcons.config.json";

	if (fs.existsSync(configPath)) {
		try {
			const raw = fs.readFileSync(configPath, "utf8");
			const config = JSON.parse(raw);
			if (Array.isArray(config.folders)) {
				subdirs = config.folders;
			}
		} catch (err) {
			console.warn(`Warning: could not read/parse ${configPath}:`, err);
		}
	}

	// If config didn't provide folders, collect all subdirectories under sourceDir
	if (subdirs.length === 0) {
		try {
			const entries = fs.readdirSync(sourceDir);
			for (const entry of entries) {
				const fullPath = path.join(sourceDir, entry);
				if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
					subdirs.push(entry);
				}
			}
		} catch (err) {
			console.error("Error while reading sourceDir subfolders:", err);
		}
	}

	function findIconFiles(sourceDir: string, targetDir: string): void {
		try {
			// Create the target directory if it doesn't exist
			if (fs.existsSync(targetDir)) {
				fs.rmSync(targetDir, { recursive: true, force: true });
			}
			fs.mkdirSync(targetDir, { recursive: true });

			const files = fs.readdirSync(sourceDir);

			for (const file of files) {
				const filePath = path.join(sourceDir, file);
				const fileStat = fs.statSync(filePath);

				if (fileStat.isDirectory()) {
					// Recursively call the function for subdirectories

					if (subdirs.includes(file)) {
						const newTargetDir = path.join(targetDir, file);
						findIconFiles(filePath, newTargetDir);
					}
				} else if (
					path.extname(file) === ".svg" ||
					path.extname(file) === ".png"
				) {
					// Copy the SVG files to the target directory preserving the subdirectories
					const targetFile = path.join(targetDir, file);
					fs.copyFileSync(filePath, targetFile);
					console.log(`Copied: ${filePath} -> ${targetFile}`);
				}
			}
		} catch (err) {
			console.error("Error:", err);
		}
	}

	findIconFiles(sourceDir, targetDir);
}

export function buildI18N() {
	try {
		const i18nDir = path.resolve("./i18n");
		const outDir = path.resolve("./src/lang");

		if (!fs.existsSync(i18nDir)) {
			console.warn(`i18n directory not found: ${i18nDir}`);
			return;
		}

		// Clear and recreate output directory
		if (fs.existsSync(outDir)) {
			fs.rmSync(outDir, { recursive: true, force: true });
		}
		fs.mkdirSync(outDir, { recursive: true });

		const walk = (dir: string, cb: (file: string) => void) => {
			const entries = fs.readdirSync(dir);
			for (const entry of entries) {
				const full = path.join(dir, entry);
				const stat = fs.statSync(full);
				if (stat.isDirectory()) {
					walk(full, cb);
				} else {
					cb(full);
				}
			}
		}

		walk(i18nDir, (file) => {
			const ext = path.extname(file).toLowerCase();
			if (ext === ".yaml" || ext === ".yml") {
				try {
					const raw = fs.readFileSync(file, "utf8");
					const data = load(raw);
					const rel = path.relative(i18nDir, file);
					const outPath = path.join(outDir, rel).replace(/\.(yaml|yml)$/i, ".json");
					const outDirPath = path.dirname(outPath);
					fs.mkdirSync(outDirPath, { recursive: true });
					fs.writeFileSync(outPath, JSON.stringify(data, null, 2), "utf8");
					console.log(`Converted: ${file} -> ${outPath}`);
				} catch (e) {
					console.error(`Failed to convert ${file}:`, e);
				}
			}
		});
	} catch (err) {
		console.error("buildI18N error:", err);
	}
}