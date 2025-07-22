import { Layout } from "antd";
import Footer from "./Footer";
import Header from "./Header";

function DefaultLayout({ children }) {
	return (
		<Layout>
			<Header />
			<main className="container">
				<div className="main-content">{children}</div>
			</main>
			<Footer />
		</Layout>
	);
}

export default DefaultLayout;
