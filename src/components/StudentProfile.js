import React, { useState } from "react";
import styles from "../module/StudentProfile.module.scss";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import student from "../data/student.json";

const FormRow = ({ label, value }) => (
	<dl className="d-flex flex-row justify-content-between gap-5">
		<dt className="d-flex flex-row fw-normal" style={{ width: "200px" }}>
			<FormattedMessage id={label} />
		</dt>
		<div style={{ width: "300px" }}>
			<dd className="d-flex flex-row">{value}</dd>
		</div>
	</dl>
);

function StudentProfile() {
	const [studentData, setStudentData] = useState(student);
	return (
		<Container className="d-flex flex-column p-1">
			{studentData &&
				studentData.map(
					({
						id,
						firstName,
						lastName,
						currentLocation,
						university,
						resume,
						linkIn,
						phoneNumber,
						email,
					}) => (
						<Container
							className={`d-flex flex-column justify-content-center align-items-center ${styles.student_container}`}
							key={id}
						>
							<div
								className="d-flex flex-column"
								style={{ width: "100%", maxWidth: "600px" }}
							>
								<FormRow label="student.name" value={firstName} />
								<FormRow label="student.last" value={lastName} />
								<FormRow label="location" value={currentLocation} />
								<FormRow
									label="student.university"
									value={university}
								/>
								<FormRow label="student.resume" value={resume} />
								<FormRow label="LinkIn" value={linkIn} />
								<FormRow label="phone" value={phoneNumber} />
								<FormRow label="email" value={email} />
							</div>
						</Container>
					)
				)}
		</Container>
	);
}

export default StudentProfile;
