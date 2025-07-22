import AuthLayout from "@/layouts/AuthLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
import AboutUs from "@/pages/AboutUs";
import HomePage from "@/pages/Home";
import Login from "@/pages/Login";

export const headerRoutes = [
	{
		path: "/",
		title: "Página Inicial",
		component: HomePage,
		layout: DefaultLayout,
	},
	{
		path: "/about-us",
		title: "Sobre a Empresa",
		component: AboutUs,
		layout: DefaultLayout,
	},
	{
		path: "/login",
		title: "Entrar no Sistema",
		component: Login,
		layout: DefaultLayout,
	},
];

export const authRoutes = [
	{
		path: "/user-panel",
		title: "Sobre a Empresa",
		component: AboutUs,
		layout: DefaultLayout,
	},
	{
		path: "/admin-panel",
		title: "Painel de Admininstracao",
		layout: DefaultLayout,
	},
];

export const routes = [
	...headerRoutes,
	...authRoutes,
	{
		path: "/products",
		title: "Produtos",
		component: HomePage,
		layout: DefaultLayout,
	},
];
