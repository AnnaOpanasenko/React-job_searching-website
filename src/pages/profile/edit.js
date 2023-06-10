import React from "react";
import { Button, Container, FormControl, FormLabel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../../components/ButtonFill";
import ButtonOutline from "../../components/ButtonOutline";
import NavTabs from "../../components/NavTabs";
import UserAvatar from "../../components/UserAvatar";

const style = {
	width: "200px",
	fontSize: "26px",
	lineHeight: "38px",
	fontWeight: "500",
	"@media (max-width: 500px)": {
		fontSize: "18px",
		lineHeight: "28px",
		fontWeight: "300",
	},
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

function ProfileEditPage() {
	let hasResume = false;
	return (
		<Container className="sd-flex flex-column">
			<NavTabs />
			<Container
				className="student_container p-responsive d-flex flex-column align-items-center"
				style={{ width: "100%" }}
			>
				<UserAvatar />
				<ButtonOutline action="student.photo" />
				<div className="container-fluid my-5" style={{ maxWidth: "768px" }}>
					<EditRow label="student.name" placeholder="Enter your name" />
					<EditRow
						label="student.last"
						placeholder="Enter your family name"
					/>
					<EditRow
						label="student.university"
						placeholder="Full university name"
					/>
					<EditRow label="location" placeholder="Where do you live" />
					<FormLabel className="d-flex flex-column flex-sm-row justify-content-between mt-3">
						<span
							style={{
								width: "200px",
								fontSize: "26px",
								lineHeight: "38px",
								fontWeight: "500",
							}}
						>
							<FormattedMessage id="student.resume" />
						</span>
						<FormControl
							className=" form-control-lg"
							type="file"
							style={{ maxWidth: "300px" }}
						/>
					</FormLabel>
					{hasResume ? <Button>delete</Button> : null}
					<EditRow label="LinkedIn" placeholder="Copy your URL" />
					<EditRow label="phone" type="tel" placeholder="+32(__)__-__-__" />
				</div>
				<ButtonFill href="/profile" action="button.save" />
			</Container>
		</Container>
	);
}

export default ProfileEditPage;
