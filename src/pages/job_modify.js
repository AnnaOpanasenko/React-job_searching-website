import React, { useState } from "react";
import { Container, FormControl, FormLabel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../components/ButtonFill";
import FilterJobField from "../components/FilterJobField";
import FilterJobType from "../components/FilterJobType";
import NavTabsCompany from "../components/NavTabsCompany";

const style = {
	width: "300px",
	fontSize: "26px",
	lineHeight: "38px",
	fontWeight: "500",
};

const EditRow = ({ label, value }) => (
	<FormLabel className="d-flex flex-column flex-sm-row justify-content-between mt-3">
		<span style={style}>
			<FormattedMessage id={label} />
		</span>
		<FormControl
			className="form-control-lg"
			type="text"
			style={{ maxWidth: "300px" }}
			value={value}
		></FormControl>
	</FormLabel>
);
const EditText = ({ label, value }) => (
	<FormLabel className="d-flex flex-column flex-sm-row justify-content-between mt-3">
		<span style={style}>
			<FormattedMessage id={label} />
		</span>
		<FormControl
			as="textarea"
			rows={5}
			className="form-control-lg"
			style={{ maxWidth: "300px" }}
			value={value}
		></FormControl>
	</FormLabel>
);

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

function JobModify() {
	return (
		<Container className="sd-flex flex-column">
			<NavTabsCompany />
			<Container
				className="student_container p-responsive d-flex flex-column align-items-center"
				style={{ width: "100%" }}
			>
				<div className="container-fluid my-5" style={{ maxWidth: "768px" }}>
					<EditRow label="job.position" value={job.title} />
					<FormLabel className="d-flex flex-column flex-sm-row justify-content-between mt-3">
						<span style={style}>
							<FormattedMessage id="filter.type" />
						</span>
						<div style={{ width: "300px" }}>
							<FilterJobType />
						</div>
					</FormLabel>
					<FormLabel className="d-flex flex-column flex-sm-row justify-content-between mt-3">
						<span style={style}>
							<FormattedMessage id="filter.field" />
						</span>
						<div style={{ width: "300px" }}>
							<FilterJobField />
						</div>
					</FormLabel>
					<EditText label="job.description" value={job.description} />
					<EditText label="job.profile" value={job.profile} />
					<EditText label="job.related" value={job.jobRelatedCompetencies} />
					<EditText label="job.offer" value={job.offer} />
					<EditRow label="job.place" value={job.placeOfEmployment} />
					<EditText label="job.extra" value={job.extraInfo} />
				</div>
				<div
					className="d-flex justify-content-between mt-4"
					style={{ width: "200px" }}
				>
					<ButtonFill href="/thankyou" action="button.post" />
				</div>
			</Container>
		</Container>
	);
}

export default JobModify;
