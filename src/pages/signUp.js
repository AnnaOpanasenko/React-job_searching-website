import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import SignIn from "./sign_in";
import SignUp from "./sign_up";

const Sign = () => {
	const [currentForm, setCurrentForm] = useState("signup");

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
			{currentForm === "signup" ? <SignUp /> : <SignIn />}

			<Button
				className="btn-light"
				onClick={() =>
					setCurrentForm(currentForm === "signup" ? "signin" : "signup")
				}
			>
				<FormattedMessage
					id={
						currentForm === "signup"
							? "button.moveToSignIn"
							: "button.moveToSignUp"
					}
				/>
			</Button>
		</Container>
	);
};

export default Sign;
