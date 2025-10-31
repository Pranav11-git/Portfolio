export const WorkExpCard = ({ logo, title, subtitle, date, paragraph }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-border border-2 rounded-3xl m-4 md:m-12 p-6 gap-6 shadow-lg  hover:shadow-xl transition-all bg-card">
      <div className="flex-shrink-0">
        <img src={logo} alt={title} className="w-20 h-20 object-contain" />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-semibold text-primary-foreground ">{title}</h1>
        <h2 className="text-lg text-primary-foreground ">{subtitle}</h2>
        <p className=" mt-2 text-primary-foreground">{paragraph}</p>
      </div>

      <div className="text-sm text-primary-foreground md:text-right">
        <p>{date}</p>
      </div>
    </div>
  );
};
