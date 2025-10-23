export const ProjectsCard = ({ title, image, description, liveLink = null, gitLink }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-primary flex flex-col justify-between items-center h-full max-w-sm">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <img src={image} alt="Project" className="rounded-lg mb-3 object-cover" />
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex gap-4">
        {liveLink && (
          <button
            onClick={() => window.open(liveLink, "_blank")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Live Link
          </button>
        )}
        {gitLink && (
          <button
            onClick={() => window.open(gitLink, "_blank")}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            GitHub
          </button>
        )}
      </div>
    </div>
  );
};
