import Head from 'next/head';

export default function Roadmap() {
  return (
    <div style={{ backgroundColor: 'black', color: '#D4AF37', minHeight: '100vh', padding: '40px', fontFamily: 'serif' }}>
      <Head>
        <title>خارطة الطريق | أكاديمية MTSO</title>
      </Head>

      <h1 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '40px' }}>خارطة طريق التداول</h1>

      <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* المرحلة الأولى */}
        <div style={{ borderRight: '4px solid #D4AF37', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '24px' }}>المرحلة الأولى: الأساسيات</h2>
          <p style={{ color: '#ccc' }}>فهم حركة السعر، الشموع اليابانية، ونفسية المتداول.</p>
        </div>

        {/* المرحلة الثانية */}
        <div style={{ borderRight: '4px solid #D4AF37', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '24px' }}>المرحلة الثانية: مفاهيم Smart Money</h2>
          <p style={{ color: '#ccc' }}>تحليل السيولة، مناطق العرض والطلب، واختراق الهياكل.</p>
        </div>

        {/* المرحلة الثالثة */}
        <div style={{ borderRight: '4px solid #D4AF37', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '24px' }}>المرحلة الثالثة: الإستراتيجية</h2>
          <p style={{ color: '#ccc' }}>تطبيق الإستراتيجية على الذهب، وإدارة الصفقات بدقة.</p>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <a href="/" style={{ color: '#D4AF37', textDecoration: 'underline' }}>العودة للرئيسية</a>
      </div>
    </div>
  );
}
