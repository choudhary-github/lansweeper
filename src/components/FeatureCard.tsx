interface FeatureCardProps {
  title: string;
  description: string;
  boldText?: string;
  cta: string;
  image: string;
}

const FeatureCard = ({ title, description, cta, image, boldText }: FeatureCardProps) => {
  const parts = boldText ? description.split(boldText) : [description];
  
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 bg-white py-12 px-4 md:px-10 rounded-lg">
      <div className="flex-1">
        <h2 className="text-2xl md:text-2xl font-bold text-[#393e46] mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <strong className="font-bold text-[#393e46]">{boldText}</strong>
              {parts[1]}
            </>
          ) : (
            description
          )}
        </p>
        <button className="bg-[#393e46] text-white font-bold px-5 py-3 rounded uppercase">
          {cta}
        </button>
      </div>
      <div className="flex-2">
        <img src={image} alt={title} className="w-full rounded shadow-md" />
      </div>
    </div>
  );
};

export default FeatureCard;