import React from "react";
import { Container } from "react-bootstrap";
import JobCard from "../components/JobCard";
import Search from "../components/Search";
import styles from "../module/Home.module.scss";

function HomePage() {
	return (
		<Container className={`header_container ${styles.header_container}`} fluid>
			<p className={`main_text text-start text-wrap mb-0 ${styles.main_text}`}>
				Find your first
				<span className="d-block text-start text-wrap">
					job or internship with us.
				</span>
			</p>
			<p className={`main_text text-start text-wrap ${styles.main_text}`}>
				Be open to a new future.
			</p>
			<hr className={`line1 ${styles.line1}`}></hr>
			<hr className={`line2 ${styles.line2}`}></hr>
			<Search />
			<JobCard />
		</Container>
	);
}

export default HomePage;
