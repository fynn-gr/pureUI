import * as path from "path";
import * as fs from 'fs';

const sourceDir = './src/pureUI/icons/';
const targetDir = './public/icons/';
const configFile: any = fs.readFileSync('./pureIcons.config.json');

export function processIcons()  {
	let config = JSON.parse(configFile);
	let subdirs: Array<string> = config.folders;

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

				} else if (path.extname(file) === '.svg') {
					// Copy the SVG files to the target directory preserving the subdirectories
					const targetFile = path.join(targetDir, file);
					fs.copyFileSync(filePath, targetFile);
					console.log(`Copied: ${filePath} -> ${targetFile}`);
				}
			}
		} catch (err) {
			console.error('Error:', err);
		}
	}
	
	findIconFiles(sourceDir, targetDir);

}
