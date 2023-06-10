import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const NavTabsCompany = () => {
	const { pathname } = useRouter();

	const getLinkProps = (href) => ({
		href,
		className: href === pathname ? "nav-link active" : "nav-link",
	});

	return (
		<Nav variant="tabs">
			<Link {...getLinkProps("/profile_company")}>
				<FormattedMessage id="profile" />
			</Link>
			<Link {...getLinkProps("/jobs_company")}>
				<FormattedMessage id="company.job" />
			</Link>
			<Link {...getLinkProps("/settings_company")}>
				<FormattedMessage id="settings" />
			</Link>
		</Nav>
	);
};

export default NavTabsCompany;
