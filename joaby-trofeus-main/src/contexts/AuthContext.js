import { defaultUser } from "@/constants/placeholders";
import usePersistedState from "@/hooks/usePersistedState";
import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = usePersistedState("user", defaultUser);

	const login = (username) => setUser({ ...user, name: username });
	const logout = () => setUser(defaultUser);
	const isLogged = () => user != defaultUser;

	return (
		<AuthContext.Provider value={{ user, login, logout, isLogged }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error("Contexto nao definido para useAuth");
	return context;
};
