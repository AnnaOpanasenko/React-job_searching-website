import data from "../../data/job.json";

export default function handler(req, res) {
	const jobQuery = req.query.q;
	const filteredJobs = jobQuery
		? data.filter((job) => job.title.toLowerCase().indexOf(jobQuery) !== -1)
		: data;

	res.status(200).json(filteredJobs);
}
