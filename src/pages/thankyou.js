import React from "react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../components/ButtonFill";
import NavTabsCompany from "../components/NavTabsCompany";

function ThankYou() {
	return (
		<Container className="sd-flex flex-column">
			<NavTabsCompany />
			<Container
				className="student_container p-responsive d-flex flex-column align-items-center"
				style={{ width: "100%" }}
			>
				<p className="fs-2">
					<FormattedMessage id="job.success" />
				</p>
				<img
					src="/images/success.svg"
					alt="Success icon"
					width="200"
					className="p-5"
				/>

				{/* if thats is error */}
				<p className="fs-3">
					<FormattedMessage id="job.error" />
				</p>
				<img
					src="/images/error.svg"
					alt="Error icon"
					width="200"
					className="p-4"
				/>
				<ButtonFill href="/jobs_company" action="button.back" />
			</Container>
		</Container>
	);
}

export default ThankYou;
