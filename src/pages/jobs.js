import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import useSWR from "swr";
import JobApplications from "../components/JobApplications";
import NavTabs from "../components/NavTabs";

const ApplicationPage = () => {
	const router = useRouter();

	const jobQuery = router.query.q?.toLowerCase() || "";

	const { data, error } = useSWR(
		`/api/jobs?q=${jobQuery}`,
		async (url) => await (await fetch(url)).json()
	);
	// const companyData = useSWR("/api/companies", fetch);

	if (!data) return <>Loading...</>;
	if (error) return <>Error loading data!...</>;

	return (
		<Container className="d-flex flex-column">
			<NavTabs />
			<div className="p-3">
				<h2 className="py-4 fw-semibold">
					<FormattedMessage id="student.applications" />
				</h2>
				<JobApplications jobs={data} />
			</div>
		</Container>
	);
};

export default ApplicationPage;
