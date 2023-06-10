import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import JobApplications from "../components/JobApplications";
import NavTabs from "../components/NavTabs";

function FavoritesPage() {
	const [jobs, setJobs] = useState(null);
	const [companies, setCompanies] = useState(null);

	useEffect(() => async () => {
		if (jobs === null) {
			const response = await fetch("/api/jobs");
			setJobs(await response.json());
		}
		if (companies === null) {
			const response = await fetch("/api/companies");
			setCompanies(await response.json());
		}
	});

	return (
		<Container className="d-flex flex-column">
			<NavTabs />
			<div className="p-3">
				<h2 className="py-4 fw-semibold">
					<FormattedMessage id="student.favorite" />
				</h2>
				{jobs ? <JobApplications jobs={jobs} /> : null}
			</div>
		</Container>
	);
}

export default FavoritesPage;
