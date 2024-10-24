module.exports = ({ env }) => ({
    settings: {
      cors: {
        origin: ['http://localhost:3000', 'https://kancelaria-frontend.vercel.app', 'https://adwokat-wiktoriasendzik.pl'],
        headers: [
          'Content-Type',
          'Authorization',
          'X-Frame-Options',
          'Origin',
          'Accept'
        ],
      },
    },
  });
