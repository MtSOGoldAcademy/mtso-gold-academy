export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: '#D4AF37', minHeight: '100vh', padding: '40px', fontFamily: 'serif', textAlign: 'center' }}>
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
