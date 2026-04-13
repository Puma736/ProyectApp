'use client';

import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState<'register' | 'login' | 'download'>('register');

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep('login');
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep('download');
  };

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
        {step === 'register' && (
          <>
            <h1 style={{
              margin: 0,
              fontSize: '2rem',
              color: '#111827',
              marginBottom: '14px'
            }}>
              Regístrate
            </h1>
            <p style={{
              margin: 0,
              color: '#6b7280',
              lineHeight: '1.7',
              marginBottom: '24px'
            }}>
              Crea tu cuenta para acceder a descargas seguras.
            </p>

            <form onSubmit={handleRegister} style={{ display: 'grid', gap: '16px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#374151', fontSize: '0.95rem' }}>
                Nombre completo
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
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
                  required
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
                Contraseña
                <input
                  type="password"
                  placeholder="********"
                  required
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
                Registrarse
              </button>
            </form>
          </>
        )}

        {step === 'login' && (
          <>
            <h1 style={{
              margin: 0,
              fontSize: '2rem',
              color: '#111827',
              marginBottom: '14px'
            }}>
              Iniciar sesión
            </h1>
            <p style={{
              margin: 0,
              color: '#6b7280',
              lineHeight: '1.7',
              marginBottom: '24px'
            }}>
              Ingresa tu correo y contraseña para acceder a la descarga.
            </p>

            <form onSubmit={handleLogin} style={{ display: 'grid', gap: '16px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#374151', fontSize: '0.95rem' }}>
                Correo electrónico
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  required
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
                Contraseña
                <input
                  type="password"
                  placeholder="********"
                  required
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
                Iniciar sesión
              </button>
            </form>
          </>
        )}

        {step === 'download' && (
          <>
            <h1 style={{
              margin: 0,
              fontSize: '2rem',
              color: '#111827',
              marginBottom: '14px'
            }}>
              ¡Bienvenido!
            </h1>
            <p style={{
              margin: 0,
              color: '#6b7280',
              lineHeight: '1.7',
              marginBottom: '24px'
            }}>
              Has iniciado sesión correctamente. Ahora puedes descargar el archivo seguro.
            </p>

            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                width: '100%',
                padding: '14px 16px',
                borderRadius: '14px',
                border: 'none',
                backgroundColor: '#111827',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Descargar Ahora (100MB)
            </a>
          </>
        )}
      </div>

      <div style={{ textAlign: 'center', maxWidth: '440px', color: '#4b5563' }}>
        <h2 style={{ margin: '0 0 10px', color: '#111827' }}>
          Mi Aplicación
        </h2>
        <p style={{ margin: 0, lineHeight: '1.8' }}>
          {step === 'register' && 'Regístrate para comenzar.'}
          {step === 'login' && 'Inicia sesión para continuar.'}
          {step === 'download' && '¡Disfruta tu descarga!'}
        </p>
      </div>
    </main>
  );
}