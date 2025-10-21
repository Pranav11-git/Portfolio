export const WorkExpCard = ({ logo, title, subtitle, date, paragraph }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center rounded-3xl m-4 md:m-12 p-6 gap-6 shadow-lg  hover:shadow-xl transition-all bg-primary">
      <div className="flex-shrink-0">
        <img src={logo} alt={title} className="w-20 h-20 object-contain" />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-semibold ">{title}</h1>
        <h2 className="text-lg ">{subtitle}</h2>
        <p className=" mt-2 ">{paragraph}</p>
      </div>

      <div className="text-sm md:text-right">
        <p>{date}</p>
      </div>
    </div>
  );
};
