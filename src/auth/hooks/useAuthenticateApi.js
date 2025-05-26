// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getSpotifyToken } from '../../../src/api/providerapi';

// export const SpotifyCallback = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleCallback = async () => {
//       const query = new URLSearchParams(window.location.search);
//       const code = query.get('code');

//       if (code) {
//         try {
//             const tokenData = await getSpotifyToken(code)   
//             localStorage.setItem('spotifyToken', JSON.stringify(tokenData)) 
//             return true
//         } catch (error) {
//           console.error('Error obteniendo el token de Spotify:', error);
//         }
//       }
//     };

//     handleCallback();
//   }, [navigate]);

//   return <div>Procesando autenticación...</div>;
// };