import React, { useState } from "react";
import styles from "../module/Profile.module.scss";
import { Container } from "react-bootstrap";
import UserAvatar from "../components/UserAvatar";
import ButtonOutline from "../components/ButtonOutline";
import { FormattedMessage } from "react-intl";
import NavTabsCompany from "../components/NavTabsCompany";
import company from "../data/company.json";

const FormRow = ({ label, value }) => (
	<dl className="d-flex flex-row justify-content-between gap-5">
		<dt className="d-flex flex-row" style={{ width: "300px" }}>
			<FormattedMessage id={label} />
		</dt>
		<div style={{ width: "350px" }}>
			<dd className="d-flex flex-row">{value}</dd>
		</div>
	</dl>
);

function ProfilePage() {
	const {
		id,
		name,
		location,
		webSite,
		vatNumber,
		description,
		contactPerson,
		phone,
		email,
	} = company[0];

	return (
		<Container className="d-flex flex-column">
			<NavTabsCompany />
			<Container
				className={`d-flex flex-column justify-content-center align-items-center ${styles.student_container}`}
				key={id}
			>
				<UserAvatar />
				<div
					className="d-flex flex-column pb-5"
					style={{ width: "100%", maxWidth: "600px" }}
				>
					<FormRow label="company.name" value={name} />

					<FormRow label="company.location" value={location} />
					<FormRow label="company.web" value={webSite} />
					<FormRow label="company.number" value={vatNumber} />
					<FormRow label="company.description" value={description} />
					<FormRow label="company.person" value={contactPerson} />
					<FormRow label="phone" value={phone} />
					<FormRow label="email" value={email} />
				</div>
				<ButtonOutline action="button.modify" href="/profile/edit_company" />
			</Container>
		</Container>
	);
}

export default ProfilePage;
