Import Head from 'next/head';

export default function Roadmap() {
  const steps = [
    { title: "المرحلة الأولى: الأساسيات الصلبة", content: "فهم بنية السوق، الشموع اليابانية، والسلوك السعري." },
    { title: "المرحلة الثانية: مفاهيم Smart Money", content: "تحليل السيولة، مناطق الطلب والعرض، وأهداف حيتان السوق." },
    { title: "المرحلة الثالثة: الإستراتيجية والتنفيذ", content: "قواعد الدخول والخروج، إدارة المخاطر، وبناء خطة تداول الذهب." },
    { title: "المرحلة الرابعة: التطبيق العملي", content: "التداول المباشر، مراجعة الصفقات، وتطوير العقلية الانضباطية." }
  ];

  return (
    <div style={{ backgroundColor: 'black', color: '#D4AF37', minHeight: '100vh', padding: '40px', fontFamily: 'serif' }}>
      <Head>
        <title>خارطة الطريق | أكاديمية MTSO</title>
      </Head>
      <h1 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '50px' }}>خارطة طريق التداول</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {steps.map((step, index) => (
          <div key={index} style={{ borderRight: '4px solid #D4AF37', paddingRight: '25px', backgroundColor: '#0a0a0a', padding: '20px', borderRadius: '0 10px 10px 0' }}>
            <h2 style={{ fontSize: '22px', marginBottom: '10px', color: '#D4AF37' }}>{step.title}</h2>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{step.content}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <a href="/" style={{ padding: '10px 30px', border: '1px solid #D4AF37', color: '#D4AF37', textDecoration: 'none', borderRadius: '5px' }}>العودة للرئيسية</a>
      </div>
    </div>
  );
}
