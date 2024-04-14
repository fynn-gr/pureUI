export function keyFromCode(code: string): string {
	let table = {
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
		KeyV: "V",
		KeyB: "B",
		KeyN: "N",
		KeyM: "M",
		Backspace: "Backspace",
		Tab: "Tab",
		NumLock: "Num Lock",
		Enter: "Enter",
		ShiftLeft: "Shift",
		ShiftRight: "Shift",
		ControllLeft: "Ctrl",
		ControllRight: "Ctrl",
		AltRight: "Alt",
		AltLeft: "Alt", //18
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
		arrowUp: "Arrow Up",
		arrowDown: "Arrow Down",
		arrowLeft: "Arrow Left",
		arrowRight: "Arrow Right",
	};

	return table[code] ? table[code] : "-" + code + "-";
}

export function clickOutside(element, callbackFunction) {
	function onClick(event) {
		if (!element.contains(event.target)) {
			callbackFunction();
		}
	}

	document.body.addEventListener("click", onClick);

	return {
		update(newCallbackFunction) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener("click", onClick);
		},
	};
}
