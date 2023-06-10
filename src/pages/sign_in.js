import React, { useState } from "react";
import { Button, Container, Form, FormLabel, FormControl } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import styles from "../module/SignIn.module.scss";

const SignIn = () => {
	const [email, setEmail] = useState(" ");
	const [pass, setPass] = useState(" ");

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};
	const handlePass = (e) => {
		setPass(e.target.value);
		setSubmitted(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "" || pass === "") {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	const errorMessage = () => {
		return (
			<div
				className={`error ${styles.error}`}
				style={{
					display: error ? "" : "none",
				}}
			>
				<p>Please, enter all the fields!</p>
			</div>
		);
	};

	return (
		<Form onSubmit={handleSubmit} className="d-flex flex-column mb-4 w-100">
			<FormLabel htmlFor="email">
				<span>
					<FormattedMessage id="email" />
				</span>
				<FormControl
					onChange={handleEmail}
					value={email}
					type="email"
					name="email"
					placeholder="youremail@gmail.com"
				/>
			</FormLabel>
			<FormLabel htmlFor="password">
				<span>
					<FormattedMessage id="password" />
				</span>
				<FormControl
					onChange={handlePass}
					value={pass}
					type="password"
					name="password"
					placeholder="*********"
					className="mb-4"
				/>
			</FormLabel>
			<div className="message">{errorMessage()}</div>

			<Button
				type="submit"
				value="Submit"
				variant="warning"
				href="#"
				className="rounded-pill me-2 text-uppercase"
			>
				Sign In
			</Button>
		</Form>
	);
};

export default SignIn;
