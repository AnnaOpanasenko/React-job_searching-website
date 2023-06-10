import data from "../../data/student.json";

export default function handler(req, res) {
	res.status(200).json(data);
}
