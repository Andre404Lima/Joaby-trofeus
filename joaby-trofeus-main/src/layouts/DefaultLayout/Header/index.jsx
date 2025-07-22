import { Layout, Menu } from "antd";
import HeaderButton from "@/components/buttons/HeaderButton";
import HeaderProfileButton from "@/components/buttons/HeaderProfileButton";
import { headerRoutes } from "@/routes/routesConfigs";

const { Header: HeaderLayout } = Layout;

function Logo() {
	return <h1 className="logo">JT</h1>;
}

function Header() {
	return (
		<HeaderLayout
			style={{
				display: "flex",
				alignItems: "center",
			}}
		>
			<Logo />
			<Menu
				theme="light"
				mode="horizontal"
				style={{ width: "100%", maxHeight: "100%" }}
			>
				{headerRoutes
					.filter(({ showOnMenu = true }) => showOnMenu)
					.map(({ title, path }) => {
						return (
							<Menu.Item key={path}>
								<HeaderButton url={path}>{title}</HeaderButton>
							</Menu.Item>
						);
					})}
			</Menu>
			<HeaderProfileButton />
		</HeaderLayout>
	);
}

export default Header;
