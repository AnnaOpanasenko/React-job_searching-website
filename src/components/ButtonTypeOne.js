import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const ButtonTypeOne = ({ action }) => {
	return (
		<Button variant="success" className="rounded-pill m-1 text-lowercase">
			<FormattedMessage id={action} />
		</Button>
	);
};

export default ButtonTypeOne;
