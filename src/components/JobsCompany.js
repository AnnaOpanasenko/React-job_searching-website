import React from "react";
import ButtonFill from "./ButtonFill";

const JobCompany = ({ title, placeOfEmployment }) => (
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
		<div className="d-flex align-items-center justify-content-between w-50">
			<ButtonFill href="/job_modify" action="button.modify" />
			<ButtonFill href="/candidates" action="button.candidates" />
			<ButtonFill href="/job_view" action="button.view" />
			<ButtonFill href="#" action="button.delete" />
		</div>
	</div>
);

export const JobsCompany = ({ jobs }) => (
	<div className="p-3">
		{jobs.map(({ id, title, placeOfEmployment }) => (
			<JobCompany key={id} title={title} placeOfEmployment={placeOfEmployment} />
		))}
	</div>
);

export default JobsCompany;
