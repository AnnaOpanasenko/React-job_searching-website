import React from "react";
import { Container, FormControl, FormLabel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../../components/ButtonFill";
import ButtonOutline from "../../components/ButtonOutline";
import NavTabsCompany from "../../components/NavTabsCompany";
import UserAvatar from "../../components/UserAvatar";

const style = {
	width: "300px",
	fontSize: "26px",
	lineHeight: "38px",
	fontWeight: "500",
};

const EditRow = ({ label, type, placeholder }) => (
	<FormLabel className="d-flex flex-column flex-sm-row justify-content-between mt-3">
		<span style={style}>
			<FormattedMessage id={label} />
		</span>
		<FormControl
			className="form-control-lg"
			type={type || "text"}
			placeholder={placeholder}
			style={{ maxWidth: "300px" }}
		/>
	</FormLabel>
);

function ProfileEditCompanyPage() {
	return (
		<Container className="sd-flex flex-column">
			<NavTabsCompany />
			<Container
				className="student_container p-responsive d-flex flex-column align-items-center"
				style={{ width: "100%" }}
			>
				<UserAvatar />
				<ButtonOutline action="company.photo" />
				<div className="container-fluid my-5" style={{ maxWidth: "768px" }}>
					<EditRow
						label="company.name"
						placeholder="Enter your company name"
					/>
					<EditRow
						label="company.location"
						placeholder="Where is the main company office?"
					/>
					<EditRow label="company.web" placeholder="Cope your URL" />
					<EditRow label="company.number" placeholder="98-03-56" />
					<EditRow
						label="company.description"
						placeholder="What did you do?"
					/>
					<EditRow label="company.person" placeholder="Full name" />
					<EditRow
						label="phone"
						type="tel"
						placeholder="+32(__)__-__-__"
					/>{" "}
					<EditRow label="email" placeholder="company@email.com" />
				</div>
				<ButtonFill href="/profile_company" action="button.save" />
			</Container>
		</Container>
	);
}

export default ProfileEditCompanyPage;
