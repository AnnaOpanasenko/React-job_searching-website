import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import SignIn from "./sign_in";
import SignUp from "./sign_up";

const Sign = () => {
	const [currentForm, setCurrentForm] = useState("signin");

	return (
		<Container
			style={{ maxWidth: "300px" }}
			className="d-flex flex-column align-items-center"
		>
			<img
				src="./images/logo.svg"
				alt="Web-site logo"
				width="150"
				className="p-5"
			/>
			{currentForm === "signin" ? <SignIn /> : <SignUp />}

			<Button
				className="btn-light"
				onClick={() =>
					setCurrentForm(currentForm === "signin" ? "signup" : "signin")
				}
			>
				<FormattedMessage
					id={
						currentForm === "signin"
							? "button.moveToSignUp"
							: "button.moveToSignIn"
					}
				/>
			</Button>
		</Container>
	);
};

export default Sign;
