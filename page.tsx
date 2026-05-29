export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: '#D4AF37', minHeight: '100vh', padding: '40px', fontFamily: 'serif', textAlign: 'center' }}>
      
      {/* قسم التواصل المباشر (روابط أصلية) */}
      <div style={{ marginBottom: '40px', borderBottom: '1px solid #D4AF37', paddingBottom: '20px' }}>
        <h2 style={{ fontSize: '20px' }}>تواصل معنا</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px', flexWrap: 'wrap' }}>
          <a href="mailto:mtsoacademy.official@gmail.com" style={{ color: '#D4AF37' }}>الإيميل</a>
          <a href="https://t.me/MTSOGoldAcademy" style={{ color: '#D4AF37' }}>قناة تليجرام MTSO</a>
          <a href="https://whatsapp.com/channel/0029Vb728O0L7UVM5Urxzf0O" style={{ color: '#D4AF37' }}>قناة واتساب MTSO</a>
          <a href="https://wa.me/message/QPLY26A45X5IO1" style={{ color: '#D4AF37' }}>مراسلة واتساب</a>
        </div>
      </div>

      <h1 style={{ fontSize: '40px', marginBottom: '50px' }}>أكاديمية الذهب MTSO</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <a href="/roadmap" style={{ border: '2px solid #D4AF37', padding: '20px', width: '300px', textDecoration: 'none', color: '#D4AF37', borderRadius: '10px' }}>
          <h2>خارطة الطريق</h2>
        </a>
        <a href="/courses" style={{ border: '2px solid #D4AF37', padding: '20px', width: '300px', textDecoration: 'none', color: '#D4AF37', borderRadius: '10px' }}>
          <h2>قسم الدروس</h2>
        </a>
        <a href="/articles" style={{ border: '2px solid #D4AF37', padding: '20px', width: '300px', textDecoration: 'none', color: '#D4AF37', borderRadius: '10px' }}>
          <h2>المقالات</h2>
        </a>
      </div>
    </div>
  );
}
