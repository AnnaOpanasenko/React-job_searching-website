import React from "react";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const SettingsItem = ({ item, href }) => {
	return (
		<div
			className="d-flex justify-content-between w-100 mb-3 pb-3"
			style={{ borderBottom: "2px dashed grey" }}
		>
			<div className="p-2">
				<p className="text-nowrap fs-3 mb-0">
					<FormattedMessage id={item} />
				</p>
			</div>
			<div className="d-flex align-items-center">
				<Button
					variant="warning"
					className="me-2 rounded-pill btn-lg fw-semibold text-uppercase"
					href={href}
				>
					<FormattedMessage id="button.change" />
				</Button>
			</div>
		</div>
	);
};

export default SettingsItem;
