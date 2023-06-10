import React from "react";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const JobApplication = ({ title, placeOfEmployment }) => (
	<div
		className="d-flex justify-content-between w-100 mb-3"
		style={{ borderBottom: "2px dashed grey" }}
	>
		<div className="p-2">
			<div className="text-nowrap fs-3 mb-0">
				<dd className="mb-2">{title}</dd>
			</div>
			<div className="text-nowrap fs-5">
				<dd className="mb-2">{placeOfEmployment}</dd>
			</div>
		</div>
		<div className="d-flex align-items-center">
			<Button
				variant="warning"
				href="/job_view"
				className="me-2 rounded-pill text-uppercase"
			>
				<FormattedMessage id="button.view" />
			</Button>
		</div>
	</div>
);

export const JobApplications = ({ jobs }) => (
	<div className="p-3">
		{jobs.map(({ id, title, placeOfEmployment }) => (
			<JobApplication
				key={id}
				title={title}
				placeOfEmployment={placeOfEmployment}
			/>
		))}
	</div>
);

export default JobApplications;
