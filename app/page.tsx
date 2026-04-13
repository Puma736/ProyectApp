export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f7f9fb'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        padding: '36px',
        marginBottom: '26px'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '2rem',
          color: '#111827',
          marginBottom: '14px'
        }}>
          Regístrate ahora
        </h1>
        <p style={{
          margin: 0,
          color: '#6b7280',
          lineHeight: '1.7',
          marginBottom: '24px'
        }}>
          Completa este formulario para recibir novedades y la descarga segura.
        </p>

        <form style={{ display: 'grid', gap: '16px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#374151', fontSize: '0.95rem' }}>
            Nombre completo
            <input
              type="text"
              placeholder="Tu nombre"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '14px',
                border: '1px solid #d1d5db',
                outline: 'none',
                fontSize: '1rem'
              }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#374151', fontSize: '0.95rem' }}>
            Correo electrónico
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '14px',
                border: '1px solid #d1d5db',
                outline: 'none',
                fontSize: '1rem'
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '14px',
              border: 'none',
              backgroundColor: '#111827',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Enviar datos
          </button>
        </form>
      </div>

      <div style={{ textAlign: 'center', maxWidth: '440px', color: '#4b5563' }}>
        <h2 style={{ margin: '0 0 10px', color: '#111827' }}>
          Mi Aplicación
        </h2>
        <p style={{ margin: 0, lineHeight: '1.8' }}>
          Haz clic abajo cuando quieras descargar el archivo seguro.
        </p>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '24px',
            padding: '16px 32px',
            backgroundColor: '#111827',
            color: '#ffffff',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.05rem'
          }}
        >
          Descargar Ahora (100MB)
        </a>
      </div>
    </main>
  );
}