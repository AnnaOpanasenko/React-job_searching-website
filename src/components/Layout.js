import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => (
	<div
		className="d-flex flex-column justify-content-between gap-5"
		style={{ height: "100vh" }}
	>
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;
