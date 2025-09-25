const IntegrationSection = () => (
  <section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 bg-white">
    <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
      <p className="text-green-600 font-bold uppercase tracking-wide mb-2">Integrations</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Your IT Stack, Smarter With <br className="hidden md:block" /> Asset Intelligence
      </h2>
      <p className="text-gray-600 mb-6">
        Lansweeper automatically feeds trusted data into your existing technology stack, so every decision starts with accuracy. 
        No matter what the IT scenario, the data is there, it's accurate, and it's ready to use.
      </p>
      <button className="bg-gray-800 text-white font-bold px-6 py-3 rounded-md hover:bg-gray-700 transition uppercase">
        Integrations
      </button>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img src="/images/graph.png" alt="IT Stack Integration" className="w-full max-w-md md:max-w-full" />
    </div>
  </section>
);

export default IntegrationSection;