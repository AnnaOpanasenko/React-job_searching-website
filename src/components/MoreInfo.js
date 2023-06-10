import React from "react";
import { Col, Row } from "react-bootstrap";
import ButtonFill from "./ButtonFill";
import { FormattedMessage } from "react-intl";
import company from "../data/company.json";
import job from "../data/job.json";

const Grid = ({ id, text }) => (
	<Row>
		<Col>
			<p>
				<FormattedMessage id={id} />
			</p>
		</Col>
		<Col className="col-8">
			<p>{text}</p>
		</Col>
	</Row>
);

function MoreInfo() {
	return (
		<Row className="p-2 mt-4" id="hide_info">
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
				<Grid id="job.description" text={job.description} />
				<Grid id="job.profile" text={job.profile} />
				<Grid id="job.related" text={job.jobRelatedCompetencies} />
				<Grid id="job.offer" text={job.offer} />
				<Grid id="job.place" text={job.placeOfEmployment} />
				<Grid id="company.location" text={company.location} />
				<Grid id="job.extra" text={job.extraInfo} />
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
	);
}

export default MoreInfo;
