const path = require('path');
const { getWeb3, getPrivateKey, sendTx } = require('@haechi-labs/vvisp-utils');
const web3 = getWeb3();
const fs = require('fs');

const privateKey = getPrivateKey(process.env.MNEMONIC, process.env.PRIV_INDEX);

const abi = fs.readFileSync(
  path.join(__dirname, '../abi/', 'HaechiToken.json'),
  { encoding: 'utf8' }
);

module.exports = function(_contractAddr = '') {
  const contract = new web3.eth.Contract(JSON.parse(abi));
  contract.options.address = _contractAddr;
  return {
    at: function(_addr) {
      contract.options.address = _addr;
    },
    getAddress: function() {
      return contract.options.address;
    },
    methods: {
      name: function() {
        return contract.methods.name().call();
      },
      totalSupply: function() {
        return contract.methods.totalSupply().call();
      },
      decimals: function() {
        return contract.methods.decimals().call();
      },
      balanceOf: function(_who) {
        return contract.methods.balanceOf(_who).call();
      },
      symbol: function() {
        return contract.methods.symbol().call();
      },
      allowance: function(_owner, _spender) {
        return contract.methods.allowance(_owner, _spender).call();
      },
      approve: function(_spender, _value, options) {
        const txData = contract.methods.approve(_spender, _value).encodeABI();
        options = {
          ...options,
          data: txData
        };
        return sendTx(
          contract.options.address,
          options ? options.value : 0,
          privateKey,
          options
        );
      },
      transferFrom: function(_from, _to, _value, options) {
        const txData = contract.methods
          .transferFrom(_from, _to, _value)
          .encodeABI();
        options = {
          ...options,
          data: txData
        };
        return sendTx(
          contract.options.address,
          options ? options.value : 0,
          privateKey,
          options
        );
      },
      transfer: function(_to, _value, options) {
        const txData = contract.methods.transfer(_to, _value).encodeABI();
        options = {
          ...options,
          data: txData
        };
        return sendTx(
          contract.options.address,
          options ? options.value : 0,
          privateKey,
          options
        );
      }
    }
  };
};
