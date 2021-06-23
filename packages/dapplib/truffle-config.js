require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name recipe place equip inner enroll frame system'; 
let testAccounts = [
"0xa9b628a6682162969248780596acbebc35ab99c625dedcf2cc7793a77eb3b503",
"0xfa53d30fe09422614088c31b49b954605da360ee8a2090e2f923428dbc135639",
"0x217ca42c91452551042cfc3f7cade1f7378783922e33c2175e62de4ba5f5fe51",
"0x3d1e37f4f94a1bcd62b20eebb7bd11d16e9d06195ccc0ed974843954a7e341ca",
"0xb666ce42ddea67d5e86cee105a70e89f7760579575a56012425b586f76a2a3eb",
"0xec2af0167a7b9fe8bb7444a9e4d1ef4fbd0e5e04ebb30268ec1e4d2ff10ab8c5",
"0x6a60c6ffd1b12038fb8e8f7352ccb2207637aed9f5ffb2b859311c3d9f62d71b",
"0x38052f69f91d6dc604cf69b3eddea5280d2a9d289cac3fa874e005821ee050a1",
"0x6315507d836f4791e68b20996461074b21e401f8382c91504d17f583a28eebf3",
"0x5a33694950e037006ca42bc740b3512b2af9b560ab872ed9eee133adc821e292"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

