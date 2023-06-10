function Time() {
	// calculate hours
	const date = "2022-11-07T14:22:03.000Z";
	let currentDate = Date.parse(new Date());
	let days = (currentDate - Date.parse(date)) / 8640000;
	let calc = Math.round(days);
	// calculate dates
	const today = new Date();
	var now = today.toLocaleDateString();
	const long = "";
	if (calc > 48) {
		lond = now - date;
		return long;
	} else {
		return calc + " " + "hours ago";
	}
}

export default Time;
