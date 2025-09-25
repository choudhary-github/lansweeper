// components/FeatureTabs.tsx
import { useState } from "react";
import FeatureCard from "./FeatureCard";

// Replace these with real images or image imports
const featureData = {
  See: {
    title: "Discover Every Asset",
    description: "Find every connected device across your estate — managed, unmanaged, or shadow — so you reduce risk, stay compliant, and act with confidence.",
    cta: "ASSET DISCOVERY",
    image: "/images/see.png",
    boldText: "Find every connected device",
  },
  Manage: {
    title: "Keep Your Inventory Current",
    description: "Consolidate all inventory data into a single, always-accurate source of truth that powers IT, security and finance decisions and eliminates chaos.",
    cta: "Asset Inventory",
    image: "/images/manage.png",
    boldText: "a single, always-accurate source of truth",
  },
  Analyze: {
    title: "Turn Data into Insights",
    description: "Use dashboards, vulnerability data, lifecycle insights and benchmarking to spot risk, forecast spend, and surface optimization opportunities.",
    cta: "INSIGHTS",
    image: "/images/analyze.png",
    boldText: "dashboards, vulnerability data, lifecycle insights and benchmarking",
  },
  Automate: {
    title: "Automate Repetitive Tasks",
    description: "Create automated workflows that reclaim licences, power down idle servers and enrich tickets automatically, giving your team hours back every week.",
    cta: "Orchestration",
    boldText: "workflows",
    image: "/images/automate.png",
  },
  Connect: {
    title: "Sync Intelligence Everywhere",
    description: "Stream clean asset data to ITSM, CMDB, and security tools through native integrations and open APIs, so every workflow starts with trusted, up-to-date intelligence.",
    cta: "INTEGRATIONS",
    image: "/images/connect.png",
  },
};

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof featureData>("See");
  
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(featureData).map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 border rounded-full font-semibold transition-all ${
              activeTab === tab
                ? "bg-orange-100 text-orange-600 border-orange-300"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab as keyof typeof featureData)}
          >
            {tab}
          </button>
        ))}
      </div>
      <FeatureCard {...featureData[activeTab]} />
    </div>
  );
};

export default FeatureTabs;
