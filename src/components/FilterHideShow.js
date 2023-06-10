import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import FilterDropdown from "./FilterDropdown";

function FilterHideShow() {
	const [isVisible, initHs] = useState(false);
	const invokeCollapse = () => {
		return initHs(!isVisible);
	};
	return (
		<div>
			<Button
				variant="outline-warning"
				className=" rounded-pill me-2 text-uppercase"
				onClick={invokeCollapse}
			>
				<FormattedMessage id="button.filter" />
			</Button>
			<Collapse in={isVisible}>
				<div>
					<FilterDropdown />
				</div>
			</Collapse>
		</div>
	);
}
export default FilterHideShow;
