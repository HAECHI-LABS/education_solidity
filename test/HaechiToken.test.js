const { BN, shouldFail, constants } = require('openzeppelin-test-helpers');

const HaechiTokenFactory = artifacts.require('HaechiToken');

contract('HaechiToken', accounts => {
  const [owner, user, ...others] = accounts;

  const initialSupply = 500 * 10 ** 18;
  let HaechiToken;
  beforeEach(async () => {
    HaechiToken = await HaechiTokenFactory.new(initialSupply.toString());
  });

  describe('constructor', () => {
    it('owner should have all initial Supply', async () => {
      let balance = await HaechiToken.balanceOf(owner);
      (await HaechiToken.balanceOf(owner)).should.be.bignumber.equal(
        initialSupply.toString()
      );
    });
  });
});
