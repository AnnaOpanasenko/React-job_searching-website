import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";

export const Header = () => {
	return (
		<div className="header">
			<Navbar
				bg="transparent"
				variant="light"
				sticky="top"
				collapseOnSelect
				expand="lg"
			>
				<NavbarBrand href="/home" className="ms-2">
					<img src="/images/logo.svg" alt="Logo" width="70" />
				</NavbarBrand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Link href="/contacts" className="nav-link">
							<FormattedMessage id="contact" />
						</Link>
						<Link href="/about" className="nav-link">
							<FormattedMessage id="about" />
						</Link>
					</Nav>
					<LanguageDropdown />
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
