# Split allocator

#### What everyone needs to know

* A project's payout distribution splits or its reserved token distribution splits can be directed at custom allocator contracts.
* An allocator can be attached to a project's split during any funding cycle configuration to automate the routing of treasury funds and reserved project tokens. 
* An allocator's `allocate(...)` transaction is triggered automatically when the split is receiving funds.

#### What you'll want to know if you're building

* An allocator contract must adhere to the [`IJBSplitsAllocator`](/protocol/api/interfaces/ijbsplitallocator.md) interface. 
* An allocator can be specified in a split through the [`JBController.launchProjectFor(...)`](/protocol/api/contracts/or-controllers/jbcontroller/write/launchprojectfor.md), [`JBController.reconfigureFundingCyclesOf(...)`](/protocol/api/contracts/or-controllers/jbcontroller/write/reconfigurefundingcyclesof.md), or [`JBSplitStore.set(...)`](/protocol/api/contracts/jbsplitsstore/write/set.md).

[Get started building split allocators](/protocol/build/treasury-extensions/split-allocator.md).
