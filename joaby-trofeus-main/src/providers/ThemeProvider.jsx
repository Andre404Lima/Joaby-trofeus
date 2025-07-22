import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { ConfigProvider } from "antd";
import joabyTheme from "@/themes/joaby-trofeus";

const lightTheme = joabyTheme;

const darkTheme = {
	token: {
		colorPrimary: "#ff4d4f",
		colorSecondary: "#722ed1",
		borderRadius: 6,
		fontSize: 16,
		colorBgBase: "#141414",
		colorTextBase: "#ffffff",
	},
};

const ThemeContext = createContext({
	isDarkMode: false,
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem("theme") === "dark";
	});

	useEffect(() => {
		const theme = isDarkMode ? darkTheme : lightTheme;

		const root = document.documentElement;
		Object.entries(theme.token).forEach(([key, value]) => {
			root.style.setProperty(`--${key}`, value.toString());
		});

		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode((prev) => !prev);
	};
	console.log({ isDarkMode });
	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			<ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
				{children}
			</ConfigProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
