# JBETHERC20ProjectPayerDeployer

_Deploys [`JBETHERC20ProjectPayer`](/protocol/api/contracts/or-utilities/jbetherc20projectpayer) contracts._

https://github.com/jbx-protocol/juice-contracts-v2/blob/main/contracts/JBETHERC20ProjectPayerDeployer.sol

### Addresses

Ethereum mainnet:  not yet.
<!-- Ethereum mainnet: [`0x99dB6b517683237dE9C494bbd17861f3608F3585`](https://etherscan.io/address/0x99dB6b517683237dE9C494bbd17861f3608F3585) -->

#### Interfaces

| Name                                                 | Description                                                                                                                              |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [**`IJBETHERC20ProjectPayerDeployer`**](/protocol/api/interfaces/ijbetherc20projectpayerdeployer.md) | General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules. |


#### Events

| Name                                                                                                      | Data                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**`DeployProjectPayer`**](/protocol/api/contracts/or-utilities/jbetherc20projectpayerdeployer/events/deployprojectpayer.md)                                                                          | <ul><li><code>[IJBProjectPayer](/protocol/api/interfaces/ijbprojectpayer.md) indexed projectPayer</code></li><li><code>uint256 defaultProjectId</code></li><li><code>address defaultBeneficiary</code></li><li><code>bool defaultPreferClaimedTokens</code></li><li><code>string defaultMemo</code></li><li><code>bytes defaultMetadata</code></li><li><code>bool preferAddToBalance</code></li><li><code>[IJBDirectory](/protocol/api/interfaces/ijbdirectory.md) directory</code></li><li><code>address caller</code></li></ul>                  |


#### Write

| Function                                                                                                     | Definition                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**`deployProjectPayer`**](/protocol/api/contracts/or-utilities/jbetherc20projectpayerdeployer/write/deployprojectpayer.md)                                                                        | <p><strong>Params</strong></p><ul><li><code>uint256 _defaultProjectId</code></li><li><code>address _defaultBeneficiary</code></li><li><code>bool _defaultPreferClaimedTokens</code></li><li><code>string _defaultMemo</code></li><li><code>bytes _defaultMetadata</code></li><li><code>bool _preferAddToBalance</code></li><li><code>[IJBDirectory](/protocol/api/interfaces/ijbdirectory.md) _directory</code></li><li><code>address _owner</code></li></ul><p><strong>Returns</strong></p><ul><li><code>[IJBProjectPayer](/protocol/api/interfaces/ijbprojectpayer.md) projectPayer</code></li></ul>                                            |
