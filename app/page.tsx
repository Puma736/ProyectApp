export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#ffffff'
    }}>
      <h1 style={{ color: '#000000', marginBottom: '10px' }}>Mi Aplicación</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Haz clic abajo para iniciar la descarga segura.</p>
      
    
      <a 
        href="https://google.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          padding: '16px 32px',
          backgroundColor: '#000000',
          color: '#ffffff',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        Descargar Ahora (100MB)
      </a>
    </main>
  );
}
