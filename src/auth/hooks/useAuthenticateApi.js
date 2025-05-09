import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSpotifyToken } from './spotifyAuth';

const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get('code');

      if (code) {
        try {
          const tokenData = await getSpotifyToken(code);
          console.log('Spotify Token:', tokenData);

          // Guarda el token en el almacenamiento local o contexto
          localStorage.setItem('spotifyToken', JSON.stringify(tokenData));

          // Redirige al usuario a la página principal
          navigate('/');
        } catch (error) {
          console.error('Error obteniendo el token de Spotify:', error);
        }
      }
    };

    handleCallback();
  }, [navigate]);

  return <div>Procesando autenticación...</div>;
};

export default SpotifyCallback;
