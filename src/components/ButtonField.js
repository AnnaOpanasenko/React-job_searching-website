import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const ButtonField = ({ action }) => {
	return (
		<Button variant="info" className="rounded-pill m-1 text-lowercase">
			<FormattedMessage id={action} />
		</Button>
	);
};

export default ButtonField;
