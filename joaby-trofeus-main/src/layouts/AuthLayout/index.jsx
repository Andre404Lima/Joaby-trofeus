import Footer from "./Footer";
import Header from "./Header";

function AuthLayout({ children }) {
	return (
		<>
			<Header />
			<main className="container">
				<div className="main-content">{children}</div>
			</main>
			<Footer />
		</>
	);
}

export default AuthLayout;
