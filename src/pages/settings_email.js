import React from "react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../components/ButtonFill";
import ButtonOutline from "../components/ButtonOutline";
import SettingsRow from "../components/SettingsRow";

function SettingsEmail() {
	return (
		<Container className="d-flex flex-column align-items-center">
			<p className="fs-4 align-self-start">
				<FormattedMessage id="email.settings" />
			</p>
			<div className="mb-5 d-flex flex-column w-50">
				<SettingsRow
					label="email.current"
					type="email"
					placeholder="Current email"
				/>
				<SettingsRow label="email.new" type="email" placeholder="New email" />
			</div>
			<div className="d-flex gap-4">
				<ButtonFill action="button.save" />
				{/* change back href depend from student or company settings */}
				<ButtonOutline action="button.back" href="/settings" />
			</div>
		</Container>
	);
}
export default SettingsEmail;
