import React from "react";
import { Container } from "react-bootstrap";
import ButtonFill from "../components/ButtonFill";
import NavTabsCompany from "../components/NavTabsCompany";
import JobCard from "../components/JobCard";
import NavTabs from "../components/NavTabs";

function JobView() {
	return (
		<Container className="d-flex flex-column">
			{/* add a NavTabs for student, when he will go to view for job where he was applied */}
			{/* <NavTabs /> */}
			<NavTabsCompany />
			<div className="mt-3">
				<JobCard />
			</div>
			<div className="align-self-end">
				<ButtonFill action="button.back" href="/jobs_company" />
			</div>
		</Container>
	);
}

export default JobView;
