import ButtonOutline from "./ButtonOutline";
import ButtonFill from "./ButtonFill";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import { setLanguage } from "../i18n";
import Link from "next/link";
import styles from "../module/Header.module.scss";

const LanguageDropdownEntry = ({ language, languageName }) => (
	<NavDropdown.Item className="p-0">
		<button
			className="p-1 px-3"
			onClick={() => setLanguage(language)}
			style={{ background: "none", width: "100%", textAlign: "left" }}
		>
			{languageName}
		</button>
	</NavDropdown.Item>
);

export const LanguageDropdown = () => (
	<Nav>
		<NavDropdown
			title={<img src="/images/round.svg" title="Change language" />}
			id="collasible-nav-dropdown"
			className="me-2 mb-2"
			style={{ maxWidth: "50px" }}
		>
			<LanguageDropdownEntry language="en" languageName="EN" />
			<LanguageDropdownEntry language="fr" languageName="FR" />
			<LanguageDropdownEntry language="nl" languageName="NL" />
		</NavDropdown>
		<div>
			<ButtonOutline action="Sign In" href="/signIn" />
			<ButtonFill action="Sign up" href="/signUp" />
		</div>

		{/* User header */}
		{/* <div className={`user d-flex align-items-start ${styles.user}`}>
			<Button className="btn-light">
				<img src="../images/redHeart.svg" alt="Favorite" width="20px" />
			</Button>
			<Link href="/profile" className="p-1">
				<img src="../images/usericon.svg" alt="Icon" width="22px" />
			</Link>
			<Link href="/profile" className="p-1">
				AC
			</Link>
			<Button className="btn-light">
				<img src="../images/exit.svg" alt="Exit" width="20px" />
			</Button>
		</div> */}
		{/* Company header */}
		{/* <div className={`user d-flex align-items-start ${styles.user}`}>
			<ButtonFill action="Add job" href="#form" />
			<Link href="/profile" className="p-1">
				<img src="../images/usericon.svg" alt="Icon" width="22px" />
			</Link>
			<Link href="/profile" className="p-1">
				A
			</Link>
			<Button className="btn-light">
				<img src="../images/exit.svg" alt="Exit" width="20px" />
			</Button>
		</div> */}
	</Nav>
);

export default LanguageDropdown;
