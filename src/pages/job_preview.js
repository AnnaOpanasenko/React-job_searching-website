import React from "react";
import { Container } from "react-bootstrap";
import ButtonFill from "../components/ButtonFill";
import JobCard from "../components/JobCard";
import NavTabsCompany from "../components/NavTabsCompany";

function JobPreview() {
	return (
		<Container className="sd-flex flex-column">
			<NavTabsCompany />
			<Container
				className="student_container p-responsive d-flex flex-column align-items-center"
				style={{ width: "100%" }}
			>
				<JobCard />
				<div
					className="d-flex justify-content-between mt-5"
					style={{ width: "200px" }}
				>
					<ButtonFill href="/job_preview" action="button.back" />
					<ButtonFill href="/thankyou" action="button.post" />
				</div>
			</Container>
		</Container>
	);
}

export default JobPreview;
