import React from "react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import NavTabs from "../components/NavTabs";
import SettingsItem from "../components/SettingsItem";

function Settings() {
	return (
		<Container className="d-flex flex-column">
			<NavTabs />
			<div className="p-3">
				<h2 className="py-4 fw-semibold">
					<FormattedMessage id="personal.settings" />
				</h2>
				<SettingsItem item="email" href="/settings_email" />
				<SettingsItem item="password" href="/settings_password" />
			</div>
		</Container>
	);
}

export default Settings;
