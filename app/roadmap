export default function Roadmap() {
  const steps = [
    { title: "Foundations", desc: "Understanding Market Structure & SMC basics." },
    { title: "Liquidity Engineering", desc: "Identifying BSL, SSL, and trapped traders." },
    { title: "MMPRA™ Methodology", desc: "Advanced Price Reversal & Entry setups." },
    { title: "Execution", desc: "Live trading psychology & risk management." },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-gold text-center mb-16">MMPRA™ Educational Roadmap</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        {steps.map((step, i) => (
          <div key={i} className="border-l-2 border-gold pl-6 py-2">
            <h2 className="text-xl font-bold text-gold">{step.title}</h2>
            <p className="text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
