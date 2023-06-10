import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const ButtonOutline = ({ href, action }) => {
	return (
		<Button
			variant="outline-warning"
			href={href}
			className="rounded-pill me-2 text-uppercase"
		>
			<FormattedMessage id={action} />
		</Button>
	);
};

export default ButtonOutline;
