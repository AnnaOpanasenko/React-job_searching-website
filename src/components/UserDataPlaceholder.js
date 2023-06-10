import React from "react";

const UserDataPlaceholder = ({
	firstName,
	lastName,
	currentLocation,
	university,
	resume,
	linkIn,
	phoneNumber,
	email,
}) => {
	<div style={{ width: "200px" }}>
		<dd className="d-flex flex-row">
			{firstName}
			{lastName}
			{currentLocation}
			{university}
			{resume}
			{linkIn}
			{phoneNumber}
			{email}
		</dd>
	</div>;
};

export const UserDataPlaceholders = ({ students }) => (
	<div className="p-3">
		{students?.map(
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
				<UserDataPlaceholder
					key={id}
					firstName={firstName}
					lastName={lastName}
					currentLocation={currentLocation}
					university={university}
					resume={resume}
					linkIn={linkIn}
					phoneNumber={phoneNumber}
					email={email}
				/>
			)
		)}
	</div>
);

export default UserDataPlaceholder;
