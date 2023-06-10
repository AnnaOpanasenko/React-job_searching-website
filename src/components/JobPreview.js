import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ButtonFill from "./ButtonFill";
import UserAvatar from "./UserAvatar";
import styles from "../module/JobCard.module.scss";
import { FormattedMessage } from "react-intl";
import ButtonField from "./ButtonField";
import ButtonTypeOne from "./ButtonTypeOne";
import ButtonTypeTwo from "./ButtonTypeTwo";
import ButtonTypeThree from "./ButtonTypeThree";

const company = {
	name: "Company name",
	location: "Brussel, Belgium",
	description:
		"BKSvision , based in Brussel , develops high-tech Manufacturing Execution Systems (MES) that are sold worldwide to companies in the textile and plastics industry.",
};

const Grid = ({ id, text }) => (
	<Row>
		<Col className="col-12 col-sm-4">
			<p className="fw-semibold">
				<FormattedMessage id={id} />
			</p>
		</Col>
		<Col className="col-12 col-sm-8">
			<p>{text}</p>
		</Col>
	</Row>
);
const JobPreview = ({
	position,
	description,
	profile,
	related,
	offer,
	place,
	extra,
}) => (
	<Container
		className={`job_card d-flex flex-column container-fluid justify-content-between align-items-stretch mb-3 p-3 ${styles.job_card}`}
	>
		<Row className="g-2">
			<Col className="col-lg-2 d-none d-lg-block text-center">
				<UserAvatar />
			</Col>
			<Col className="col-6 col-sm-7 d-flex flex-column justify-content-between p-2 ms-2">
				<div>
					<p>{position}</p>
					<p>{company.name}</p>
					<p>{place}</p>
				</div>
				<div className="pb-2">
					<ButtonField action="Filter" />
					<ButtonTypeOne action="Filter" />
					<ButtonTypeTwo action="Filter" />
					<ButtonTypeThree action="Filter" />
				</div>
			</Col>
			<Col className="col d-flex flex-column justify-content-between align-items-end p-2 me-2">
				<p></p>
				<div className="d-flex justify-content-between align-items-center gap-3">
					<div>
						<img src="/images/heart.svg" alt="Heart" width="20" />
					</div>
					<div>
						<Button
							id="more_info"
							className={`btn-link btn btn_link ${styles.btn_link}`}
							onClick={() => setIsExpanded(!isExpanded)}
						>
							<FormattedMessage id="card.moreinfo" />
						</Button>
					</div>
				</div>
			</Col>
		</Row>

		<Row className="p-2 mt-4">
			<Col className="col-12 col-md-2 d-flex flex-row flex-md-column text-end">
				<div className="me-5 mb-4">
					<ButtonFill href="#" action="button.apply" />
				</div>
				<div className="me-5">
					<ButtonFill href="#" action="button.share" />
				</div>
			</Col>
			<Col className="pe-3">
				<Grid id="company.description" text={company.description} />
				<Grid id="job.description" text={description} />
				<Grid id="job.profile" text={profile} />
				<Grid id="job.related" text={related} />
				<Grid id="job.offer" text={offer} />
				<Grid id="job.place" text={place} />
				<Grid id="company.location" text={company.location} />
				<Grid id="job.extra" text={extra} />
			</Col>
			<Row className="mt-3">
				<div className="d-flex justify-content-center">
					<div className="m-3">
						<ButtonFill href="#" action="button.apply" />
					</div>
					<div className="m-3">
						<ButtonFill href="#" action="button.share" />
					</div>
				</div>
			</Row>
		</Row>
	</Container>
);

export default JobPreview;
