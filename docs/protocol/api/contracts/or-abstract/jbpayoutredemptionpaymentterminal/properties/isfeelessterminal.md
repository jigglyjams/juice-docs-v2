# isFeelessTerminal

Contract: [`JBPayoutRedemptionPaymentTerminal`](/protocol/api/contracts/or-abstract/jbpayoutredemptionpaymentterminal/README.md)​‌

Interface: [`IJBPayoutRedemptionPaymentTerminal`](/protocol/api/interfaces/ijbpayoutredemptionpaymentterminal.md)

**Terminals that can be paid towards from this terminal without incurring a fee.**

#### Definition

```
/**
  @notice
  Terminals that can be paid towards from this terminal without incurring a fee.

  _terminal The terminal that can be paid toward.
*/
mapping(IJBPaymentTerminal => bool) public override isFeelessTerminal;
```

* Arguments:
  * `_terminal` is the terminal that can be paid toward.
* The resulting view function can be accessed externally by anyone.
* The resulting function overrides a function definition from the [`IJBPayoutRedemptionPaymentTerminal`](/protocol/api/interfaces/ijbpayoutredemptionpaymentterminal.md) interface.
