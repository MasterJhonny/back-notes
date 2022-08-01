const { appConfig } = require('../config');


module.exports = {
    setAvatarUrl: function setAvatarUrl (filename) {
        const { host, port } = appConfig;
        return `http://${host}:${port}/public/${filename}`;
    }
}