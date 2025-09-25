interface CardProps {
  title: string;
  description: string;
  image: React.ReactNode;
}

const Card = ({ title, description, image }: CardProps) => (
  <div className="bg-[#f4f4f4] p-6 rounded-lg space-y-3 text-center shadow-sm hover:shadow-md transition">
    <h2 className="text-xl font-bold underline text-gray-800">{title}</h2>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4">{image}</div>
  </div>
);

export default Card;