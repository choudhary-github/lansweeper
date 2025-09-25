// components/MiniFeaturesSection.tsx
import MiniFeatureCard from "./MiniFeatureCard";

const MiniFeaturesSection = () => {
  const features = [
    {
      icon: <img src="/Icon-Visibility.svg" alt="" />,
      title: "Discover Every Asset",
      description: "Find every managed, unmanaged and shadow asset across IT, OT and cloud — erasing blind spots that hide risk and compliance gaps.",
    },
    {
      icon: <img src="/Icon-Relevancy.svg" alt="" />,
      title: "Centralize Asset Truth",
      description: "Merge fragmented inventories into one always-current source of truth that feeds ITSM, CMDB, and security tools to shorten incident resolution.",
    },
    {
      icon: <img src="/Icons-Without-text-Value.svg" alt="" />,
      title: "Cut IT Waste",
      description: "Reclaim unused licenses, power-down idle servers, or enrich tickets with lifecycle data, giving your team hours back every month.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <MiniFeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default MiniFeaturesSection;
