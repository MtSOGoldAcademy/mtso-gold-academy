import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MTSO GOLD | Smart Money Concepts - أكاديمية النخبة',
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
          <span className="text-xs text-gray-400">سيادة النخبة</span>
          <span className="text-xl text-gray-500">⋮</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] leading-tight max-w-4xl mx-auto">
          من نحن
        </h1>
      </header>

      {/* Section 1: Core Values */}
      <section className="py-16 px-6 max-w-xl mx-auto space-y-10">
        <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800 text-right">
          <span className="text-4xl text-[#D4AF37] block mb-5">⚡</span>
          <h2 className="text-2xl font-bold mb-4">الدقة</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-1">تحليل متقدم وعميق لأسواق الذهب باستخدام مفاهيم</p>
          <p className="text-base text-gray-400 font-mono">Smart Money Concepts</p>
        </div>

        <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800 text-right">
          <span className="text-4xl text-[#D4AF37] block mb-5">🎯</span>
          <h2 className="text-2xl font-bold mb-4">التمكن</h2>
          <p className="text-lg text-gray-300 leading-relaxed">بناء مهارات احترافية وقدرات تحليلية تميز المتداول المحترف</p>
        </div>
      </section>

      {/* Section 2: Results & Strategy */}
      <section className="py-16 px-6 max-w-xl mx-auto space-y-16">
        <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800 text-right">
          <span className="text-4xl text-[#D4AF37] block mb-5">📈</span>
          <h2 className="text-2xl font-bold mb-4">النتائج</h2>
          <p className="text-lg text-gray-300 leading-relaxed">نتائج ملموسة وقابلة للقياس من خلال تطبيق استراتيجيات مثبتة</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] leading-tight max-w-3xl mx-auto">
          Smart Money Concepts
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          أساس منهجيتنا يقوم على فهم عميق لكيفية تحرك الأموال الذكية في الأسواق المالية
        </p>
      </section>

      {/* Section 3: Strategy Boxes */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-right w-full">
          <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">مناطق السيولة</h2>
            <p className="text-lg text-gray-300 leading-relaxed">تحديد المناطق التي تجتمع فيها الأوامر الكبيرة والسيولة العالية</p>
          </div>
          <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">تحليل الطلب والعرض</h2>
            <p className="text-lg text-gray-300 leading-relaxed">فهم ديناميكيات الطلب والعرض لتوقع حركات السوق المستقبلية</p>
          </div>
          <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">مستويات الأسعار المهمة</h2>
            <p className="text-lg text-gray-300 leading-relaxed">تحديد مستويات الأسعار التي تشهد تفاعلات قوية من المتداولين المحترفين</p>
          </div>
          <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">أنماط السوق</h2>
            <p className="text-lg text-gray-300 leading-relaxed">التعرف على الأنماط البصرية والتقنية التي تشير إلى حركات قادمة</p>
          </div>
        </div>
      </section>

      {/* Section 4: Phase 2 */}
      <section className="py-20 px-6 max-w-4xl mx-auto space-y-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] leading-tight max-w-3xl mx-auto">
          المرحلة الثانية
        </h1>
        <div className="text-right">
          <h2 className="text-4xl font-bold mb-8">ماذا ستتعلم</h2>
          <ul className="space-y-6 text-xl text-gray-300 list-disc list-outside pr-5">
            <li>تحليل عميق لأسواق الذهب باستخدام SMC</li>
            <li>تحديد نقاط الدخول والخروج المثلى</li>
            <li>إدارة المخاطر بفعالية</li>
            <li>بناء استراتيجية تداول شخصية</li>
            <li>التطبيق العملي على حسابات حقيقية</li>
          </ul>
        </div>
      </section>

      {/* Section 5: Features */}
      <section className="py-20 px-6 max-w-xl mx-auto space-y-20 text-right">
        <div className="bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">المميزات</h2>
          <div className="space-y-4">
            <div className="text-3xl font-extrabold text-white">
              <span className="text-[#D4AF37]">8 أسابيع</span>
            </div>
            <p className="text-lg text-gray-400">مدة البرنامج المكثف</p>
          </div>
          <div className="space-y-4 mt-8">
            <div className="text-3xl font-extrabold text-white">
              <span className="text-[#D4AF37]">1:1</span>
            </div>
            <p className="text-lg text-gray-400">دعم شخصي ومتابعة</p>
          </div>
          <div className="space-y-4 mt-8">
            <div className="text-3xl font-extrabold text-white">
              <span className="text-[#D4AF37]">∞</span>
            </div>
            <p className="text-lg text-gray-400">وصول مدى الحياة للمحتوى</p>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
            هل أنت مستعد للانضمام؟
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6 mb-12">
            انضم إلى مجتمع النخبة من المتداولين وابدأ رحلتك نحو التمكن المالي
          </p>
          <div className="space-y-5">
            <a href="https://t.me/MTSOGoldAcademy" target="_blank" rel="noopener noreferrer" className="bg-[#D4AF37] text-black w-full text-center p-5 rounded-xl text-lg font-bold flex items-center justify-center gap-3">
              <span className="text-2xl font-mono rotate-[-45deg]">➩</span> تليجرام
            </a>
            <a href="https://wa.me/message/QPLY26A45X5IO1" target="_blank" rel="noopener noreferrer" className="bg-[#1A1A1A] text-[#D4AF37] w-full text-center p-5 rounded-xl text-lg font-bold border border-gray-800 block">
              واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#121212] border-t border-gray-900 text-right mt-16 max-w-4xl mx-auto rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">تواصل معنا</h3>
            <ul className="space-y-4 text-lg text-gray-400">
              <li><a href="https://t.me/MTSOGoldAcademy" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">تليجرام</a></li>
              <li><a href="mailto:mtsoacademy.official@gmail.com" className="hover:text-[#D4AF37]">البريد الإلكتروني</a></li>
              <li><a href="https://whatsapp.com/channel/0029Vb728O0L7UVM5Urxzf0O" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">قناة واتساب MTSO</a></li>
              <li><a href="https://wa.me/message/QPLY26A45X5IO1" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">راسلنا واتساب</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">الروابط السريعة</h3>
            <ul className="space-y-4 text-lg text-gray-400">
              <li><a href="/roadmap" className="hover:text-[#D4AF37]">خارطة الطريق</a></li>
              <li><a href="/courses" className="hover:text-[#D4AF37]">قسم الدروس</a></li>
              <li><a href="/articles" className="hover:text-[#D4AF37]">المقالات</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-3 mt-16 text-right">
          <div className="flex items-center gap-3 text-xl text-[#D4AF37]">
              <span className="text-2xl">♛</span> 
              <span className="font-medium">MTSO GOLD</span>
          </div>
          <p className="text-xs text-gray-500">أكاديمية النخبة لتداول الذهب بناء على مفاهيم Smart Money Concepts</p>
        </div>

        <div className="mt-12 text-center text-xs text-gray-600 border-t border-gray-900 pt-8">
          <p>إخلاء مسؤولية: التداول في الأسواق المالية ينطوي على مخاطر كبيرة وقد يؤدي إلى خسارة رأس المال.</p>
          <p className="mt-4">© 2026 MTSO GOLD | جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}
