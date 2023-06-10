import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const SignUp = () => {
	return (
		<Container className="d-flex flex-column text-center justify-content-center">
			<p className="mb-4 fs-4">Choose your role:</p>
			<div className="mb-3">
				<Button
					variant="warning"
					href="/signUpStudent"
					className="rounded-pill me-2 text-uppercase"
				>
					<FormattedMessage id="button.searcher" />
				</Button>
			</div>
			<div>
				<Button
					variant="warning"
					href="/signUpCompany"
					className="rounded-pill me-2 text-uppercase"
				>
					<FormattedMessage id="button.applier" />
				</Button>
			</div>
		</Container>
	);
};

export default SignUp;
