import data from "../../data/company.json";

export default function handler(req, res) {
	res.status(200).json(data);
}
