import { useState } from "react";
type ThemeType = "dark" | "light"
function theme() {
	const currTheme = document.documentElement.getAttribute("data-theme") as ThemeType;
	const [theme, setTheme] = useState<ThemeType>(currTheme);
	function useTheme() {
		return setTheme;
	}
	return useTheme;
}

export default theme;