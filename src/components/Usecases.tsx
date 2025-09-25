import Card from "./Card";

const Usecases = () => {
  const data = [
    {
      title: "Gain Asset Visibility",
      description: "See every managed and unmanaged asset in one live source of truth.",
      image: <img className="w-full h-auto object-contain" src="/images/Asset-Inventory-1536x864.png" alt="" />,
    },
    {
      title: "Optimize IT Spend",
      description: "Reclaim licenses, power-down idle servers, flag end-of-life risks.",
      image: <img className="w-full h-auto object-contain" src="/images/Platform-Overview-Risk-Insights.png" alt="" />,
    },
    {
      title: "Speed Up Incidents",
      description: "Auto-populate tickets and cut time-to-resolution for your service desk.",
      image: <img className="w-full h-auto object-contain" src="/images/Lansweeper-Platform-Lifecycle-Insights.png" alt="" />,
    },
    {
      title: "Simplify Compliance",
      description: "Maintain accurate records for audits and regulatory requirements.",
      image: <img className="w-full h-auto object-contain" src="/images/Lansweeper-Platform-Ticket-Enrichment.png" alt="" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
      {data.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} image={item.image} />
      ))}
    </div>
  );
};

export default Usecases;
