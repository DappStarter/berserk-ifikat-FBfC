require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note pitch snake hidden arm army gentle'; 
let testAccounts = [
"0xeb016da47cafee41412aad0d64f1cd17ee14b5b21be143b529345eaa7abfb365",
"0xbb100db4efded02a7f20fa6e0ad03dc73f98a787f31a3407da35c7c545d6257c",
"0xe187121367f4599750e0b75f8052a938bc876c3071975b797e41bc0002253c21",
"0x8633a4fbd841bec56d498e173fcf47c262aa21735121c7ba9bf61a6a412b7981",
"0x40806c7a5e0c406ca552dc9411e97f2b4e60c1e42b3cb5ab5117c78c715831dc",
"0xc11c7b3b7cb98829f8015325f4b502207e667da6d80501d1b6226b021beb20e5",
"0x2f39e45192c105f89912f89dc992158b43b888259a353e3e459813da8d63fd4b",
"0x48634d9e075b22d5775def6d03df27a75554ad4158a6f438c0d5c37b6b623cf0",
"0xec308fc63ac14eed68fcc69f37efaa8993c8693bd7c7844b2f15f066255810df",
"0xe4c020ecbbaac63e1b6f9c2dc4fb39d615235a1e902e55b5c28a4d9ee8f874af"
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

