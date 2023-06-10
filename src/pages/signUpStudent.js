import React, { useState } from "react";
import { Button, Container, Form, FormLabel, FormControl } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import styles from "../module/SignIn.module.scss";

function SignUpStudent() {
	const [name, setName] = useState(" ");
	const [family, setFamily] = useState(" ");
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
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};
	const handleFamily = (e) => {
		setFamily(e.target.value);
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
		<Container style={{ maxWidth: "300px" }}>
			<Form onSubmit={handleSubmit} className="d-flex flex-column">
				<FormLabel htmlFor="name">
					<span>
						<FormattedMessage id="student.name" />
					</span>
					<FormControl
						onChange={handleName}
						value={name}
						type="text"
						name="text"
						placeholder="David"
					/>
				</FormLabel>
				<FormLabel htmlFor="name">
					<span>
						<FormattedMessage id="student.last" />
					</span>
					<FormControl
						onChange={handleFamily}
						value={family}
						type="text"
						name="text"
						placeholder="David"
					/>
				</FormLabel>
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
					/>
				</FormLabel>
				<div className="message">{errorMessage()}</div>

				<Button
					type="submit"
					value="Submit"
					href="/profile"
					variant="warning"
					className="rounded-pill me-2 mt-4 text-uppercase"
				>
					Sign Up
				</Button>
			</Form>
		</Container>
	);
}

export default SignUpStudent;
