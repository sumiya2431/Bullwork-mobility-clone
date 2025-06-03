const JobCard = ({ title, experience }) => (
  <div className="bg-white shadow-md p-6 rounded-lg mb-4 flex justify-between items-center">
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{experience}</p>
    </div>
        <div className="text-center">
          <a href="mailto:contact@bullworkmobility.com">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </a>
        </div>
  </div>
);

export default JobCard; 