import React, { useState } from "react";
import { Button, Collapse, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../components/ButtonFill";
import NavTabsCompany from "../components/NavTabsCompany";
import StudentProfile from "../components/StudentProfile";
import ProfilePage from "./profile";

const job = {
	id: "1",
	title: "UI/UX Designer",
	placeOfEmployment: "Vilvoorde, Belgium",
	date: "2022-11-23T08:00:00Z",
	candidates: "40",
};

function Candidates() {
	const [isVisible, initHs] = useState(false);

	const invokeCollapse = () => {
		return initHs(!isVisible);
	};

	return (
		<Container className="d-flex flex-column">
			<NavTabsCompany />
			<div className="d-flex justify-content-between">
				<div className="p-2 mt-3">
					<div className="text-nowrap fs-3 mb-0">
						<dd className="mb-2">{job.title}</dd>
					</div>
					<div className="text-nowrap fs-4">
						<dd className="mb-2">{job.placeOfEmployment}</dd>
					</div>
				</div>
				<div className="p-2 mt-3">
					<div className="text-nowrap fs-4 mb-0">
						<dd className="mb-2">From {job.date} you have</dd>
					</div>
					<div className="text-nowrap fs-4">
						<dd className="mb-2">{job.candidates} candidates</dd>
					</div>
				</div>
			</div>
			<Container
				className="p-2 pb-3 mt-3"
				style={{ borderBottom: "2px dashed grey" }}
			>
				<div className="d-flex justify-content-between w-100">
					<div className="d-flex justify-content-center">
						<img src="../images/usericon.svg" alt="Icon" width="22px" />
						<p className="text-nowrap fs-4 mb-1 ps-3">AC</p>
					</div>
					<div className="d-flex align-items-center justify-content-between w-50">
						<ButtonFill action="download cv" />
						<Button
							variant="warning"
							className=" rounded-pill me-2 text-uppercase"
							onClick={invokeCollapse}
							aria-controls="collapse_card"
							aria-expanded={isVisible}
						>
							<FormattedMessage id="profile" />
						</Button>
						{/* when student apply to job */}
						<p className="text-nowrap fs-4 mb-1">01-12-2022</p>
					</div>
				</div>
				<Collapse in={isVisible}>
					<div id="collapse_card" className="container-fluid">
						<StudentProfile />
					</div>
				</Collapse>
			</Container>
			<div className="mt-4 align-self-end">
				<ButtonFill action="button.back" href="/jobs_company" />
			</div>
		</Container>
	);
}

export default Candidates;
