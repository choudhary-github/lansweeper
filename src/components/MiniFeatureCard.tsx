interface MiniFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MiniFeatureCard = ({ icon, title, description }: MiniFeatureCardProps) => (
  <div className="bg-gray-100 rounded-lg p-6 shadow-sm transition hover:shadow-md">
    <div className="flex flex-col max-w-7xl mx-auto px-4">
      <div className="mb-4 h-10 w-10">{icon}</div>
      <h3 className="text-2xl font-bold text-[#393e46] mb-2">{title}</h3>
      <p className="text-gray-700 text-[16px]">{description}</p>
    </div>
  </div>
);

export default MiniFeatureCard;