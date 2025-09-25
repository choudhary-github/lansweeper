interface ReviewCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  name: string;
  role: string;
  tags: string;
}

const ReviewCardItem = ({ image, category, title, description, name, role, tags }: ReviewCardProps) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col max-w-sm w-full hover:bg-gray-100 cursor-pointer">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-6 flex flex-col flex-1">
      <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full w-fit mb-3">
        {category}
      </span>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
      <div className="text-sm text-gray-700 font-semibold">{name}</div>
      <div className="text-xs text-gray-500 mb-2">{role}</div>
      <div className="text-xs text-gray-400">{tags}</div>
    </div>
  </div>
);

const ReviewCard = () => {
  const cardData = [
    {
      image: "/images/2024-05-14-Customer-Cases-Radisson-1024x536.png.webp",
      category: "HOSPITALITY",
      title: "Radisson Hotel Group Gains Global Visibility with Lansweeper",
      description: "Learn how Lansweeper eliminated manual data gathering and reporting, saving time and resources for the Radisson Hotel Group.",
      name: "Ben Vrijsen",
      role: "Manager IT Field Services, EMEA, Radisson",
      tags: "ENTERPRISE, IT MANAGERS",
    },
    {
      image: "/images/2024-05-14-Customer-Cases-Rentokil-Initial-1024x536.png.webp",
      category: "INDUSTRIAL SERVICES",
      title: "Rentokil Gains Full Visibility across Global IT Estate, Improving Security, Compliance, and Cost Savings",
      description: "Learn how Rentokil streamlined their Windows 11 migration and achieved SOX compliance with Lansweeper.",
      name: "Rentokil Gains Full Visibility",
      role: "",
      tags: "ENTERPRISE, IT MANAGERS",
    },
    {
      image: "/images/2024-05-14-Customer-Cases-University-of-York-1024x536.png.webp",
      category: "EDUCATION",
      title: "University of York Reduces IT Spending with £300,000 Annually",
      description: "Learn how the University of York saves around £300,000 annually in IT spending while improving IT procurement, management, and security.",
      name: "Thomas Borgia",
      role: "IT Operations Manager",
      tags: "ENTERPRISE, IT MANAGERS",
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <ReviewCardItem key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;