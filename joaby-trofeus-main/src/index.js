import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "@/routes/AppRoutes";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "./providers/ThemeProvider";

import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<AppRoutes />
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
