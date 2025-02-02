# JBFundingCycleMetadataResolver

#### Code

https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/libraries/JBFundingCycleMetadataResolver.sol

#### Definition

```
library JBFundingCycleMetadataResolver {
  function reservedRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {
    return uint256(uint16(_fundingCycle.metadata >> 8));
  }

  function redemptionRate(JBFundingCycle memory _fundingCycle) internal pure returns (uint256) {
    // Redemption rate is a number 0-10000. It's inverse was stored so the most common case of 100% results in no storage needs.
    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 24));
  }

  function ballotRedemptionRate(JBFundingCycle memory _fundingCycle)
    internal
    pure
    returns (uint256)
  {
    // Redemption rate is a number 0-10000. It's inverse was stored so the most common case of 100% results in no storage needs.
    return JBConstants.MAX_REDEMPTION_RATE - uint256(uint16(_fundingCycle.metadata >> 40));
  }

  function payPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 56) & 1) == 1;
  }

  function distributionsPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 57) & 1) == 1;
  }

  function redeemPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 58) & 1) == 1;
  }

  function burnPaused(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 59) & 1) == 1;
  }

  function mintingAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 60) & 1) == 1;
  }

  function changeTokenAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 61) & 1) == 1;
  }

  function terminalMigrationAllowed(JBFundingCycle memory _fundingCycle)
    internal
    pure
    returns (bool)
  {
    return ((_fundingCycle.metadata >> 62) & 1) == 1;
  }

  function controllerMigrationAllowed(JBFundingCycle memory _fundingCycle)
    internal
    pure
    returns (bool)
  {
    return ((_fundingCycle.metadata >> 63) & 1) == 1;
  }

  function setTerminalsAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 64) & 1) == 1;
  }

  function setControllerAllowed(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 65) & 1) == 1;
  }

  function shouldHoldFees(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return ((_fundingCycle.metadata >> 66) & 1) == 1;
  }

  function useTotalOverflowForRedemptions(JBFundingCycle memory _fundingCycle)
    internal
    pure
    returns (bool)
  {
    return ((_fundingCycle.metadata >> 67) & 1) == 1;
  }

  function useDataSourceForPay(JBFundingCycle memory _fundingCycle) internal pure returns (bool) {
    return (_fundingCycle.metadata >> 68) & 1 == 1;
  }

  function useDataSourceForRedeem(JBFundingCycle memory _fundingCycle)
    internal
    pure
    returns (bool)
  {
    return (_fundingCycle.metadata >> 69) & 1 == 1;
  }

  function dataSource(JBFundingCycle memory _fundingCycle)
    internal
    pure
    returns (IJBFundingCycleDataSource)
  {
    return IJBFundingCycleDataSource(address(uint160(_fundingCycle.metadata >> 70)));
  }

  /**
    @notice
    Pack the funding cycle metadata.

    @param _metadata The metadata to validate and pack.

    @return packed The packed uint256 of all metadata params. The first 8 bits specify the version.
  */
  function packFundingCycleMetadata(JBFundingCycleMetadata memory _metadata)
    internal
    pure
    returns (uint256 packed)
  {
    // version 1 in the bits 0-7 (8 bits).
    packed = 1;
    // reserved rate in bits 8-23 (16 bits).
    packed |= _metadata.reservedRate << 8;
    // redemption rate in bits 24-39 (16 bits).
    // redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.
    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.redemptionRate) << 24;
    // ballot redemption rate rate in bits 40-55 (16 bits).
    // ballot redemption rate is a number 0-10000. Store the reverse so the most common case of 100% results in no storage needs.
    packed |= (JBConstants.MAX_REDEMPTION_RATE - _metadata.ballotRedemptionRate) << 40;
    // pause pay in bit 56.
    if (_metadata.pausePay) packed |= 1 << 56;
    // pause tap in bit 57.
    if (_metadata.pauseDistributions) packed |= 1 << 57;
    // pause redeem in bit 58.
    if (_metadata.pauseRedeem) packed |= 1 << 58;
    // pause burn in bit 59.
    if (_metadata.pauseBurn) packed |= 1 << 59;
    // allow minting in bit 60.
    if (_metadata.allowMinting) packed |= 1 << 60;
    // pause change token in bit 61.
    if (_metadata.allowChangeToken) packed |= 1 << 61;
    // allow terminal migration in bit 62.
    if (_metadata.allowTerminalMigration) packed |= 1 << 62;
    // allow controller migration in bit 63.
    if (_metadata.allowControllerMigration) packed |= 1 << 63;
    // allow set terminals in bit 64.
    if (_metadata.allowSetTerminals) packed |= 1 << 64;
    // allow set controller in bit 65.
    if (_metadata.allowSetController) packed |= 1 << 65;
    // hold fees in bit 66.
    if (_metadata.holdFees) packed |= 1 << 66;
    // useTotalOverflowForRedemptions in bit 67.
    if (_metadata.useTotalOverflowForRedemptions) packed |= 1 << 67;
    // use pay data source in bit 68.
    if (_metadata.useDataSourceForPay) packed |= 1 << 68;
    // use redeem data source in bit 69.
    if (_metadata.useDataSourceForRedeem) packed |= 1 << 69;
    // data source address in bits 70-229.
    packed |= uint256(uint160(address(_metadata.dataSource))) << 70;
  }

  /**
    @notice
    Expand the funding cycle metadata.

    @param _fundingCycle The funding cycle having its metadata expanded.

    @return metadata The metadata object.
  */
  function expandMetadata(JBFundingCycle memory _fundingCycle)
    internal
    pure
    returns (JBFundingCycleMetadata memory metadata)
  {
    return
      JBFundingCycleMetadata(
        reservedRate(_fundingCycle),
        redemptionRate(_fundingCycle),
        ballotRedemptionRate(_fundingCycle),
        payPaused(_fundingCycle),
        distributionsPaused(_fundingCycle),
        redeemPaused(_fundingCycle),
        burnPaused(_fundingCycle),
        mintingAllowed(_fundingCycle),
        changeTokenAllowed(_fundingCycle),
        terminalMigrationAllowed(_fundingCycle),
        controllerMigrationAllowed(_fundingCycle),
        setTerminalsAllowed(_fundingCycle),
        setControllerAllowed(_fundingCycle),
        shouldHoldFees(_fundingCycle),
        useTotalOverflowForRedemptions(_fundingCycle),
        useDataSourceForPay(_fundingCycle),
        useDataSourceForRedeem(_fundingCycle),
        dataSource(_fundingCycle)
      );
  }
}
```
