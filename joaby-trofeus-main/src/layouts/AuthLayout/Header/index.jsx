import HeaderButton from "@/components/buttons/HeaderButton";
import HeaderProfileButton from "@/components/buttons/HeaderProfileButton";
import { headerRoutes } from "@/routes/routesConfigs";

function Logo() {
	return <h1 className="logo">JT</h1>;
}

function Header() {
	return (
		<header>
			<div
				style={{
					display: "flex",
					justifyContent: "left",
					alignItems: "center",
				}}
			>
				<Logo />
				<nav>
					{headerRoutes?.map(({ title, path }) => {
						return <HeaderButton url={path}>{title}</HeaderButton>;
					})}
				</nav>
				<HeaderProfileButton />
			</div>
		</header>
	);
}

export default Header;
