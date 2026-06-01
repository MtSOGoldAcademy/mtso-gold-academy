import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MTSO GOLD | Smart Money Concepts - Elite Academy',
  description: 'Official platform for MTSO Gold Elite Academy - Institutional Trading Education'
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans text-center">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-gray-900">
        <div className="flex items-center gap-3">
          <span className="text-2xl text-[#D4AF37]">♛</span> 
          <span className="text-xl font-medium tracking-tight text-[#D4AF37]">MTSO GOLD</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <span className="text-xs text-gray-400">Elite Sovereignty</span>
          <span className="text-xl text-gray-500">⋮</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] leading-tight max-w-4xl mx-auto">
          About Us
        </h1>
      </header>

      {/* Section 1: Core Values */}
      <section className="py-16 px-6 max-w-xl mx-auto space-y-10">
        <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800 text-center">
          <span className="text-4xl text-[#D4AF37] block mb-5">⚡</span>
          <h2 className="text-2xl font-bold mb-4">Precision</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-1">Advanced market analysis for Gold using</p>
          <p className="text-base text-[#D4AF37] font-mono">Smart Money Concepts</p>
        </div>

        <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800 text-center">
          <span className="text-4xl text-[#D4AF37] block mb-5">🎯</span>
          <h2 className="text-2xl font-bold mb-4">Mastery</h2>
          <p className="text-lg text-gray-300 leading-relaxed">Building professional skills and analytical capabilities for elite traders.</p>
        </div>
      </section>

      {/* Section 2: Results & Strategy */}
      <section className="py-16 px-6 max-w-xl mx-auto space-y-16">
        <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800 text-center">
          <span className="text-4xl text-[#D4AF37] block mb-5">📈</span>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p className="text-lg text-gray-300 leading-relaxed">Tangible and measurable results through proven trading strategies.</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] leading-tight max-w-3xl mx-auto">
          Smart Money Concepts
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Our methodology is based on a deep understanding of how Smart Money moves in financial markets.
        </p>
      </section>

      {/* Footer (Simplified for Example) */}
      <footer className="py-16 px-6 bg-[#121212] border-t border-gray-900 mt-16 max-w-4xl mx-auto rounded-3xl">
        <p className="text-sm text-gray-600">© 2026 MTSO GOLD | All Rights Reserved</p>
      </footer>
    </div>
  );
}
