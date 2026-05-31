export const metadata = {
  title: 'Roadmap | MTSO Academy',
}

export default function Roadmap() {
  const steps = [
    { title: "Phase 1: Solid Foundations", content: "Understand market structure, Japanese candlesticks, and price behavior." },
    { title: "Phase 2: Smart Money Concepts", content: "Liquidity analysis, supply and demand zones, and market maker targets." },
    { title: "Phase 3: Strategy and Execution", content: "Entry and exit rules, risk management, and building a gold trading plan." },
    { title: "Phase 4: Practical Application", content: "Live trading, trade reviews, and developing a disciplined mindset." }
  ];

  return (
    <div style={{ backgroundColor: 'black', color: '#D4AF37', minHeight: '100vh', padding: '40px', fontFamily: 'serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '50px' }}>Trading Roadmap</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {steps.map((step, index) => (
          <div key={index} style={{ borderRight: '4px solid #D4AF37', paddingRight: '25px', backgroundColor: '#0a0a0a', padding: '20px', borderRadius: '0 10px 10px 0' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '10px', color: '#D4AF37' }}>{step.title}</h2>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{step.content}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <a href="/" style={{ padding: '10px 30px', border: '1px solid #D4AF37', color: '#D4AF37', textDecoration: 'none', borderRadius: '5px' }}>Back to Home</a>
      </div>
    </div>
  );
}
