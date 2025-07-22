import { useAuthContext } from "@/contexts/AuthContext";

function HeaderProfileButton({ children, ...buttonProps }) {
	const { user, login, logout, isLogged } = useAuthContext();

	function testLogin() {
		if (!isLogged) {
			login("Gatts");
		} else {
			logout();
		}
	}

	return (
		<button
			type="button"
			className="header-button profile"
			{...buttonProps}
		>
			<div
				style={{
					display: "inline-flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "4px",
				}}
				onClick={() => login("Flavio")}
			>
				<div>{user.name}</div>
				<div>
					<img className="profile-image" src={user.profileImageUrl} />
				</div>
			</div>
		</button>
	);
}

export default HeaderProfileButton;
