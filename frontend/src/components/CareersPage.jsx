import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/jobs") 
      .then(res => setJobs(res.data))
      .catch(err => console.error("Failed to fetch jobs", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Current Open Positions</h2>
      {jobs.length > 0 ? (
        jobs.map(job => (
          <JobCard key={job.id} title={job.title} experience={job.experience} />
        ))
      ) : (
        <p className="text-center text-gray-600">No jobs currently listed.</p>
      )}
    </div>
  );
};

export default CareersPage;
