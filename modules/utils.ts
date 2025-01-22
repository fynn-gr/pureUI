import { emit } from "@tauri-apps/api/event";

export function keyFromCode(code: string): string {
	const table: Record<string, string> = {
		KeyQ: "Q",
		KeyW: "W",
		KeyE: "E",
		KeyR: "R",
		KeyT: "T",
		KeyZ: "Z",
		KeyU: "U",
		KeyI: "I",
		KeyO: "O",
		KeyP: "P",
		KeyA: "A",
		KeyS: "S",
		KeyD: "D",
		KeyF: "F",
		KeyG: "G",
		KeyH: "H",
		KeyJ: "J",
		KeyK: "K",
		KeyL: "L",
		KeyY: "Y",
		KeyX: "X",
		KeyC: "C",
		KeyV: "C",
		KeyB: "B",
		KeyN: "N",
		KeyM: "M",
		Backspace: "Backspace",
		Tab: "Tab",
		NumLock: "Num Lock",
		Enter: "Enter",
		ShiftLeft: "Shift",
		ShiftRight: "Shift",
		ControlLeft: "Ctrl", // Fixed typo (was "ControllLeft")
		ControlRight: "Ctrl", // Fixed typo (was "ControllRight")
		AltRight: "Alt",
		AltLeft: "Alt",
		Spacebar: "Spacebar",
		Digit1: "1",
		Digit2: "2",
		Digit3: "3",
		Digit4: "4",
		Digit5: "5",
		Digit6: "6",
		Digit7: "7",
		Digit8: "8",
		Digit9: "9",
		Digit0: "0",
		Comma: ",",
		ArrowUp: "Arrow Up", // Fixed capitalization (was "arrowUp")
		ArrowDown: "Arrow Down", // Fixed capitalization (was "arrowDown")
		ArrowLeft: "Arrow Left", // Fixed capitalization (was "arrowLeft")
		ArrowRight: "Arrow Right", // Fixed capitalization (was "arrowRight")
	};

	return table[code] ?? `-${code}-`;
}

export function clickOutside(element: HTMLElement, callbackFunction: Function) {
	function onClick(event: any) {
		if (!element.contains(event.target)) {
			callbackFunction();
		}
	}

	document.body.addEventListener("click", onClick);

	return {
		update(newCallbackFunction: Function) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener("click", onClick);
		},
	};
}

export function usingTauri(): boolean {
	return (
		typeof window !== "undefined" && typeof window.__TAURI__ !== "undefined"
	);
}
