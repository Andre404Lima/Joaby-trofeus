import { useState, useEffect } from "react";

function usePersistedState(key, initialValue) {
	const getStoredValue = () => {
		const saved = localStorage.getItem(key);
		if (saved !== null) return JSON.parse(saved);
		return initialValue;
	};

	const [state, setState] = useState(getStoredValue);

	useEffect(() => {
		if (state !== undefined) {
			localStorage.setItem(key, JSON.stringify(state));
		}
	}, [key, state]);

	return [state, setState];
}

export default usePersistedState;
