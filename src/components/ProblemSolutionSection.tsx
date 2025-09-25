import {
  FaTimesCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCheck,
} from "react-icons/fa";

const ProblemSolutionSection = () => {
  const problemItems = [
    "Capture only a fraction of assets.",
    "Focus narrowly on specific use cases.",
    "Create conflicting inventories and blind spots.",
  ];

  const solutionItems = [
    "Discover every asset, everywhere.",
    "Drive smarter decisions with actionable insights.",
    "Feed clean data to ITSM, CMDB, and security tools – solving any use case.",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 py-10 max-w-7xl">
      <div className="flex-1 bg-gray-100 rounded-lg p-6">
        <FaTimesCircle className="text-red-500 text-4xl mb-4" />
        <h3 className="text-lg font-bold text-[#393e46]">The Problem</h3>
        <h2 className="text-xl md:text-2xl font-bold text-[#393e46] my-4">
          Fragmented Asset Data Creates Hidden Risk
        </h2>
        <p className="text-gray-700 mb-4">
          Technology environments are more complex than ever, yet most
          solutions:
        </p>
        <ul className="space-y-5 mb-4">
          {problemItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <FaExclamationTriangle className="text-yellow-500 mt-1" />
              {item}
            </li>
          ))}
        </ul>
        <div className="my-8">
          <p className="font-semibold text-gray-800">The result?</p>
          <p className="text-gray-700">
            Wasted time. Poor decisions. Higher risk. Higher cost.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-gray-100 rounded-lg p-6">
        <FaCheckCircle className="text-green-500 text-3xl mb-4" />
        <h3 className="text-lg font-semibold text-[#393e46]">The Solution</h3>
        <h2 className="text-xl md:text-2xl font-bold text-[#393e46] my-4">
          From Blind Spots to One Source of Truth
        </h2>
        <p className="text-gray-700 mb-4">
          Break down data silos so every team works from one source of truth.
        </p>
        <ul className="space-y-5 mb-4">
          {solutionItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <FaCheck className="text-green-500 mt-1" />
              {item}
            </li>
          ))}
        </ul>
        <div className="my-8">
          <p className="font-semibold text-gray-800">The payoff?</p>
          <p className="text-gray-700">
            Complete visibility. Faster fixes. Lower spend. Lower risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
