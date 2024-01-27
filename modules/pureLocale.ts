import { get } from "svelte/store";
import { lang } from "@/stores";

export class pureLocale {
	language: string;
	path: string;
	obj: object;

	constructor(language: string, path = "./local") {
		this.language = language;
		this.path = path;

		fetch(`/locale/${language}.json`).then((res) => {
			this.obj = res.json();
			console.log(this.obj);
		});
	}
}

export function locale(key: string) {
	try {
		console.log(get(lang).obj);
		return get(lang).obj[key];
	} catch {
		console.log("cant find", key);
		return "";
	}
}
