'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

// test comment
const Crypto = core.registerPlugin('Crypto', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CryptoWeb()),
});

class CryptoWeb extends core.WebPlugin {
    async encrypt(options) {
        console.log('Not implemented', options);
        return { encrypted: '' };
    }
    async decrypt(options) {
        console.log('Not implemented', options);
        return { decrypted: '' };
    }
    async generateSymmetricKey() {
        console.log('Not Implemented');
        return 'Not Implemented';
    }
    async generateIV() {
        console.log('Not Implemented');
        return 'Not Implemented';
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CryptoWeb: CryptoWeb
});

exports.Crypto = Crypto;
//# sourceMappingURL=plugin.cjs.js.map
