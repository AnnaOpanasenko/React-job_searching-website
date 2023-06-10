import React from "react";
import { Card } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import FilterJobType from "./FilterJobType";
import FilterJobLocation from "./FilterJobLocation";
import FilterJobField from "./FilterJobField";

function FilterDropdown() {
	return (
		<Card
			className="d-flex flex-md-row flex-column justify-content-between gap-4 p-4 container-fluid"
			style={{ maxWidth: "680px" }}
		>
			<div>
				<p className="fs-5">
					<FormattedMessage id="filter.location" />
				</p>
				<FilterJobLocation />
			</div>
			<div>
				<p className="fs-5">
					<FormattedMessage id="filter.type" />
				</p>
				<FilterJobType />
			</div>
			<div>
				<p className="fs-5">
					<FormattedMessage id="filter.field" />
				</p>
				<FilterJobField />
			</div>
		</Card>
	);
}

export default FilterDropdown;
