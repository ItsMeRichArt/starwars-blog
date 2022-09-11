import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;