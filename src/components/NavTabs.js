import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const NavTabs = () => {
	const { pathname } = useRouter();

	const getLinkProps = (href) => ({
		href,
		className: href === pathname ? "nav-link active" : "nav-link",
	});

	return (
		<Nav variant="tabs">
			<Link {...getLinkProps("/profile")}>
				<FormattedMessage id="profile" />
			</Link>
			<Link {...getLinkProps("/jobs")}>
				<FormattedMessage id="student.job" />
			</Link>
			<Link {...getLinkProps("/favorites")}>
				<FormattedMessage id="student.favorite" />
			</Link>
			<Link {...getLinkProps("/settings")}>
				<FormattedMessage id="settings" />
			</Link>
		</Nav>
	);
};

export default NavTabs;
