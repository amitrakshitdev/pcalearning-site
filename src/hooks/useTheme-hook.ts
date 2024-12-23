import { useState } from "react";
type ThemeType = "dark" | "light"
function useTheme() {
	const currTheme = document.documentElement.getAttribute("data-theme") as ThemeType;
	const [, setTheme] = useState<ThemeType>(currTheme);
	function getTheme() {
		return setTheme;
	}
	return getTheme;
}

export default useTheme;