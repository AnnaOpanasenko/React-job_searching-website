import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ButtonFill from "./ButtonFill";
import UserAvatar from "./UserAvatar";
import styles from "../module/JobCard.module.scss";
import { FormattedMessage, FormattedRelativeTime } from "react-intl";
import { getTimeSince } from "../i18n";
import ButtonField from "./ButtonField";
import ButtonTypeOne from "./ButtonTypeOne";
import ButtonTypeTwo from "./ButtonTypeTwo";
import ButtonTypeThree from "./ButtonTypeThree";

const job = {
	title: "UI/UX Designer",
	placeOfEmployment: "Vilvoorde, Belgium",
	date: "2022-11-23T08:00:00Z",
	description:
		"As a UI / UX designer you will join a team of ten software engineers. Together with your colleagues, you are responsible for the design and development of attractive and user-friendly Manufacturing Execution Systems.You are responsible for analyzing and solving complex UX problems.You create wireframes and component libraries in a design system, so that the transfer to colleagues is easy.You acquire knowledge of the latest technological trends and developments (online, by attending seminars and visiting technology fairs). Together with your colleagues, you analyze the usefulness of these new technologies for BMSvision and you know how to transfer the benefits of this to managers and colleagues.",
	profile:
		"You obtained a Bachelor in graphic and digital media, MCT or have an equivalent level of knowledge through experience. You are open - minded, have analytical skills. You succeed in successfully converting customer requirements into user-friendly applications. You can communicate fluently with others and you have persuasiveness. You can transfer knowledge and are a real team player. Experience with Figma, Storybook and/or interest in frontend development is a plus.",
	jobRelatedCompetencies:
		"Analyzing customer needs Translating the concept and script into a first visual presentation (drawn, painted, ...). Selecting and editing images (photos, logos, drawings) from a database (color measurement, photo retouching, image settings, covering contours, photo montage, ...). The design layouts according to the typographic rules and the graphic charter (text and image integration, corrections, ...). Elaborate graphic elements with graphic software (drawings, illustrations, computer graphics, ...). Check whether the realization complies with the initial project and make adjustments (graphic design, user-friendliness, navigability, ...). Modeling graphical elements (creating volume, objects, characters, ...). Determining textures, colors, image settings, brightness, ... Developing or adapting a website: Designing the structure (tree). Developing or adapting a website: Designing the navigation (user-friendliness, links, ...)",
	offer: "An international environment with a high-tech product range. A varied range of tasks. An open working atmosphere with a flat organizational structure, helpful colleagues and accessible managers. Internal and external training opportunities. Autonomy and room for initiative. An attractive salary with numerous fringe benefits (meal vouchers, group insurance, hospitalization insurance, private internet subscription, laptop, company car possible, bicycle leasing, part-time home work possible).",
	extraInfo:
		"We want you be: Planning and organizing. Creativity. To communicate. Responsibility. Result Orientation. Analyze. Thinking digitally. Diversity. Critical thinking. Independence. To collaborate. Customer focus ",
};
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

function JobCard() {
	const [isExpanded, setIsExpanded] = useState(false);
	const [timeElapsed, timeElapsedUnit] = getTimeSince(new Date(job.date));
	const text = job.description;
	const partText = text.substr(0, 150);

	return (
		<Container
			className={`job_card d-flex flex-column container-fluid justify-content-between align-items-stretch mb-3 p-3 ${styles.job_card}`}
		>
			<Row className="g-2">
				<Col className="col-lg-2 d-none d-lg-block text-center">
					<UserAvatar />
				</Col>
				<Col className="col-6 col-sm-7 d-flex flex-column justify-content-between p-2 ms-2">
					<div>
						<p>{job.title}</p>
						<p>{company.name}</p>
						<p>{job.placeOfEmployment}</p>
					</div>
					<div className="d-none d-md-block">
						<p>{partText}...</p>
					</div>
					<div className="pb-2">
						<ButtonField action="Filter" />
						<ButtonTypeOne action="Filter" />
						<ButtonTypeTwo action="Filter" />
						<ButtonTypeThree action="Filter" />
					</div>
				</Col>
				<Col className="col d-flex flex-column justify-content-between align-items-end p-2 me-2">
					<p>
						<FormattedRelativeTime
							value={-Math.ceil(timeElapsed)}
							unit={timeElapsedUnit}
						/>
					</p>
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

			{isExpanded ? (
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
			) : null}
		</Container>
	);
}

export default JobCard;
