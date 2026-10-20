import { getLang } from "@/ts/Stores";

export class pureLocale {
	language: string;
	path: string;
	obj: Record<string, string> = {};

	constructor(language: string, path = "./local") {
		this.language = language;
		this.path = path;

		fetch(`/locale/${language}.json`)
			.then(res => res.json())
			.then(data => {
				this.obj = data;
				console.log(this.obj);
			});
	}
}

export function locale(key: string) {
	const langValue = getLang();
	if (!langValue?.obj) {
		console.log("cant find", key);
		return "";
	}
	return langValue.obj[key] ?? "";
}
