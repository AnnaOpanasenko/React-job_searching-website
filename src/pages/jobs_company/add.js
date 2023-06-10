import React, { useState } from "react";
import { Container, FormControl, FormLabel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ButtonFill from "../../components/ButtonFill";
import FilterJobField from "../../components/FilterJobField";
import FilterJobType from "../../components/FilterJobType";
import JobPreview from "../../components/JobPreview";
import NavTabsCompany from "../../components/NavTabsCompany";

const style = {
	width: "300px",
	fontSize: "26px",
	lineHeight: "38px",
	fontWeight: "500",
};

const EditRow = ({ label, value, placeholder, onChange }) => (
	<FormLabel className="d-flex flex-column flex-sm-row justify-content-between mt-3">
		<span style={style}>
			<FormattedMessage id={label} />
		</span>
		<FormControl
			className="form-control-lg"
			type="text"
			value={value}
			placeholder={placeholder}
			style={{ maxWidth: "300px" }}
			onChange={onChange}
		/>
	</FormLabel>
);
const EditText = ({ label, value, placeholder, onChange }) => (
	<FormLabel className="d-flex flex-column flex-sm-row justify-content-between mt-3">
		<span style={style}>
			<FormattedMessage id={label} />
		</span>
		<FormControl
			as="textarea"
			value={value}
			rows={5}
			className="form-control-lg"
			placeholder={placeholder}
			style={{ maxWidth: "300px" }}
			onChange={onChange}
		/>
	</FormLabel>
);

function JobsCompanyAdd() {
	const [showPreview, setShowPreview] = useState(false);
	const [jobPosition, setJobPosition] = useState("");
	const [jobDescription, setJobDescription] = useState("");
	const [jobProfile, setJobProfile] = useState("");
	const [jobRelated, setJobRelated] = useState("");
	const [jobOffer, setJobOffer] = useState("");
	const [jobPlace, setJobPlace] = useState("");
	const [jobExtra, setJobExtra] = useState("");

	return (
		<Container className="sd-flex flex-column">
			<NavTabsCompany />
			<Container
				className="student_container p-responsive d-flex flex-column align-items-center"
				style={{ width: "100%" }}
			>
				{showPreview ? (
					<JobPreview
						position={jobPosition}
						description={jobDescription}
						profile={jobProfile}
						related={jobRelated}
						offer={jobOffer}
						place={jobPlace}
						extra={jobExtra}
					/>
				) : (
					<div className="container-fluid my-5" style={{ maxWidth: "768px" }}>
						<EditRow
							label="job.position"
							value={jobPosition}
							placeholder="designer"
							onChange={(e) => setJobPosition(e.currentTarget.value)}
						/>
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
						<EditText
							label="job.description"
							value={jobDescription}
							placeholder="What candidate suppose to do?"
							onChange={(e) => setJobDescription(e.currentTarget.value)}
						/>
						<EditText
							label="job.profile"
							value={jobProfile}
							placeholder="Who we need!"
							onChange={(e) => setJobProfile(e.currentTarget.value)}
						/>
						<EditText
							label="job.related"
							value={jobRelated}
							placeholder="What do we need from you."
							onChange={(e) => setJobRelated(e.currentTarget.value)}
						/>
						<EditText
							label="job.offer"
							value={jobOffer}
							placeholder="What is your proposition?"
							onChange={(e) => setJobOffer(e.currentTarget.value)}
						/>
						<EditRow
							label="job.place"
							value={jobPlace}
							placeholder="Brussel, Belgium"
							onChange={(e) => setJobPlace(e.currentTarget.value)}
						/>
						<EditText
							label="job.extra"
							value={jobExtra}
							placeholder="not necessary"
							onChange={(e) => setJobExtra(e.currentTarget.value)}
						/>
					</div>
				)}
				<div
					className="d-flex justify-content-between mt-4"
					style={{ width: "200px" }}
				>
					<ButtonFill href="/thankyou" action="button.post" />
					<ButtonFill
						action={showPreview ? "Hide preview" : "Show preview"}
						onClick={() => setShowPreview(!showPreview)}
					/>
				</div>
			</Container>
		</Container>
	);
}

export default JobsCompanyAdd;
