export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: '#D4AF37', minHeight: '100vh', padding: '40px', fontFamily: 'serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #D4AF37', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>MTSO Gold Elite Academy</h1>
        <nav>
          <a href="https://t.me/MTSOGoldAcademy" style={{ color: '#D4AF37', marginRight: '15px' }}>Telegram</a>
          <a href="https://wa.me/message/QPLY26A45X5IO1" style={{ color: '#D4AF37' }}>WhatsApp</a>
        </nav>
      </header>
      <main style={{ textAlign: 'center', marginTop: '80px' }}>
        <h2 style={{ fontSize: '40px' }}>Elite Trading Education</h2>
        <p style={{ marginTop: '20px' }}>Welcome to the official platform.</p>
      </main>
    </div>
  );
}
