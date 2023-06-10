import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../components/ButtonFill";
import JobsCompany from "../components/JobsCompany";
import NavTabsCompany from "../components/NavTabsCompany";

function FavoritesPage() {
	const [jobs, setJobs] = useState(null);

	useEffect(() => async () => {
		if (jobs === null) {
			const response = await fetch("/api/jobs");
			setJobs(await response.json());
		}
	});

	return (
		<Container className="d-flex flex-column">
			<NavTabsCompany />
			<div className="p-3">
				<h2 className="py-4 fw-semibold">
					<FormattedMessage id="company.list" />
				</h2>
				{jobs ? <JobsCompany jobs={jobs} /> : null}
			</div>
			<div className="align-self-end">
				<ButtonFill action="button.add" href="/jobs_company/add" />
			</div>
		</Container>
	);
}

export default FavoritesPage;
