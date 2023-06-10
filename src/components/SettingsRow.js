import React from "react";
import { FormControl, FormLabel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const SettingsRow = ({ label, type, placeholder }) => (
	<FormLabel className="d-flex flex-column mt-3 w-75">
		<span className="mb-2 fs-5">
			<FormattedMessage id={label} />
		</span>
		<FormControl
			className="form-control-md"
			type={type}
			placeholder={placeholder}
			style={{ maxWidth: "300px" }}
		/>
	</FormLabel>
);

export default SettingsRow;
