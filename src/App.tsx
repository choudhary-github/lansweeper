import Button from "./components/Button";
import Navbar from "./components/Navbar";
import screenshot from "/images/screenshot.png";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import FeatureTabs from "./components/FeatureTabs";
import MiniFeaturesSection from "./components/MiniFeaturesSection";
import Usecases from "./components/Usecases";
import IntegrationSection from "./components/IntegrationSection";
import ReviewCard from "./components/ReviewCard";

const App = () => (
  <>
    <div className="flex flex-col max-w-7xl mx-auto px-4">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center py-16 md:py-24">
        <p className="text-[14px] md:text-[16px] font-bold text-[#27c686] uppercase">
          Technology Asset Intelligence
        </p>
        <h1 className="text-[32px] md:text-[48px] lg:text-[56px] max-w-2xl font-bold text-[#393e46] mt-4 leading-tight">
          Gain Full Visibility Into Your IT, OT, and IoT Assets
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#393e46] mt-5 max-w-2xl">
          Lansweeper is your single source of truth for technology asset
          intelligence – helping you reduce risk, increase efficiency, and make
          smarter IT decisions.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button name="Start Free Trial" color="#ff8a00" />
          <Button
            name="Explore the platform"
            style={{
              color: "#000",
              border: "2px solid #000",
              backgroundColor: "#fff",
            }}
          />
        </div>
        <p className="mt-5 text-[#6b7280] text-[13px]">
          14-day free trial, no credit card needed.
        </p>
      </div>

      <div className="w-full">
        <img
          src={screenshot}
          alt="Lansweeper platform screenshot"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="mt-6 flex justify-center">
        <img src="G2-Star-Rating.svg" alt="G2 Star Rating" className="h-6" />
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <p className="mt-5 text-[#6b7280] text-[13px]">
          Trusted by 18K+ organizations to uncover blind spots, reduce risk, and
          optimize IT spend.
        </p>
      </div>

      <ProblemSolutionSection />

      <div className="flex flex-col justify-center items-center text-center py-16">
        <p className="text-[14px] font-bold text-[#27c686] uppercase">
          platform overview
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#393e46] mt-4 leading-tight">
          How Lansweeper Delivers Asset Intelligence
        </p>
        <p className="text-[16px] text-[#393e46] mt-5">
          Lansweeper unifies all IT, OT, and cloud assets in one source of truth
          — eliminating blind spots, lowering risk and spend, and guiding
          smarter decisions.
        </p>
      </div>

      <FeatureTabs />
    </div>

    <MiniFeaturesSection />

    <div className="flex flex-col max-w-7xl mx-auto px-4">
      <div className="flex flex-col justify-center items-center text-center py-16">
        <p className="text-[14px] font-bold text-[#27c686] uppercase">
          Choose your first outcome
        </p>
        <p className="text-[28px] md:text-[32px] font-bold text-[#393e46] mt-4 leading-tight">
          What's your first priority right now?
        </p>
        <p className="text-[16px] text-[#393e46] mt-5">
          Uncover blind spots, optimize operations, cut costs, and secure your
          environment, starting with your most pressing need.
        </p>
        <Button
          style={{ marginTop: "2rem" }}
          name="VIEW ALL USE CASES"
          color="#393e46"
        />
      </div>

      <Usecases />
      <IntegrationSection />

      <div className="space-y-5">
        <p className="text-3xl text-[#393e46] font-bold">Real-World Impact</p>
        <p className="text-[16px] text-[#393e46]">
          Over 18,000 enterprises worldwide trust Lansweeper to gain complete
          visibility, eliminate blind spots, and make data-driven decisions.
        </p>
      </div>

      <ReviewCard />
    </div>
  </>
);

export default App;
