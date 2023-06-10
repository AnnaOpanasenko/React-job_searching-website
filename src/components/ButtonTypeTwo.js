import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const ButtonTypeTwo = ({ action }) => {
	return (
		<Button variant="warning" className="rounded-pill m-1 text-lowercase ">
			<FormattedMessage id={action} />
		</Button>
	);
};

export default ButtonTypeTwo;
