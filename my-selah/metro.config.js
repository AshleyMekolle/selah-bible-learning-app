
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.server = {
  ...config.server,
  enhanceMiddleware: (metroMiddleware) => {
    return (req, res, next) => {
      if (req.url.startsWith('/api/')) {
        const backendUrl = 'http://127.0.0.1:8000' + req.url.replace('/api', '');
        console.log('Proxying:', req.url, '->', backendUrl);
        req.url = req.url;
      }
      return metroMiddleware(req, res, next);
    };
  }
};

module.exports = config;