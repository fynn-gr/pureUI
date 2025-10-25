import * as path from "path";
import * as fs from "fs";

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
