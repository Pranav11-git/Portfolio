export const ProjectsCard = ({ title, image, description, liveLink = null, gitLink }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-primary flex flex-col items-center">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <img src={image} alt="Project" className="size-2/4 rounded-lg mb-3" />
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
