import React from "react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../components/ButtonFill";
import ButtonOutline from "../components/ButtonOutline";
import SettingsRow from "../components/SettingsRow";

function SettingsPassword() {
	return (
		<Container className="d-flex flex-column align-items-center">
			<p className="fs-4 align-self-start">
				<FormattedMessage id="password.settings" />
			</p>
			<div className="mb-5 d-flex flex-column w-50">
				<SettingsRow
					label="password.current"
					type="password"
					placeholder="Current password"
				/>
				<SettingsRow
					label="password.new"
					type="password"
					placeholder="New password"
				/>
				<SettingsRow
					label="password.confirm"
					type="password"
					placeholder="Confirm password"
				/>
			</div>
			<div className="d-flex gap-4">
				<ButtonFill action="button.save" />
				{/* change back href depend from student or company settings */}
				<ButtonOutline action="button.back" href="/settings" />
			</div>
		</Container>
	);
}
export default SettingsPassword;
