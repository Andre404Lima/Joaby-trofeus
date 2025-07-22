import { useLocation, useNavigate } from "react-router";

function HeaderButton({ children, url, ...buttonProps }) {
	const { pathname } = useLocation();
	const isCurrentPage = pathname === url;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(url);
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className={`header-button ${isCurrentPage ? "active" : ""}`}
			{...buttonProps}
		>
			{children}
		</button>
	);
}

export default HeaderButton;
