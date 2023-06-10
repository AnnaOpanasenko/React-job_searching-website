import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const ButtonFill = ({ href, onClick, action }) => {
	return (
		<Button
			variant="warning"
			onClick={onClick}
			href={href}
			className="rounded-pill me-2 text-uppercase"
		>
			<FormattedMessage id={action} />
		</Button>
	);
};

export default ButtonFill;
