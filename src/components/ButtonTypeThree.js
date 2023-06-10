import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const ButtonTypeThree = ({ action }) => {
	return (
		<Button variant="danger" className="rounded-pill m-1 text-lowercase">
			<FormattedMessage id={action} />
		</Button>
	);
};

export default ButtonTypeThree;
