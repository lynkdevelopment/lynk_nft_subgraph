// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftInfo(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get payment(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Upgrade extends ethereum.Event {
  get params(): Upgrade__Params {
    return new Upgrade__Params(this);
  }
}

export class Upgrade__Params {
  _event: Upgrade;

  constructor(event: Upgrade) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get attr(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get point(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LYNKNFT__addedVAInfoOfResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class LYNKNFT__mintInfoOfResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class LYNKNFT extends ethereum.SmartContract {
  static bind(address: Address): LYNKNFT {
    return new LYNKNFT("LYNKNFT", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  BLACK_HOLE(): Address {
    let result = super.call("BLACK_HOLE", "BLACK_HOLE():(address)", []);

    return result[0].toAddress();
  }

  try_BLACK_HOLE(): ethereum.CallResult<Address> {
    let result = super.tryCall("BLACK_HOLE", "BLACK_HOLE():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DB_CONTRACT(): Address {
    let result = super.call("DB_CONTRACT", "DB_CONTRACT():(address)", []);

    return result[0].toAddress();
  }

  try_DB_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall("DB_CONTRACT", "DB_CONTRACT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addedVAInfoOf(param0: BigInt): LYNKNFT__addedVAInfoOfResult {
    let result = super.call(
      "addedVAInfoOf",
      "addedVAInfoOf(uint256):(uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new LYNKNFT__addedVAInfoOfResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_addedVAInfoOf(
    param0: BigInt
  ): ethereum.CallResult<LYNKNFT__addedVAInfoOfResult> {
    let result = super.tryCall(
      "addedVAInfoOf",
      "addedVAInfoOf(uint256):(uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LYNKNFT__addedVAInfoOfResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  exists(tokenId: BigInt): boolean {
    let result = super.call("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_exists(tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mintInfoOf(param0: Address): LYNKNFT__mintInfoOfResult {
    let result = super.call(
      "mintInfoOf",
      "mintInfoOf(address):(uint128,uint128)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new LYNKNFT__mintInfoOfResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_mintInfoOf(
    param0: Address
  ): ethereum.CallResult<LYNKNFT__mintInfoOfResult> {
    let result = super.tryCall(
      "mintInfoOf",
      "mintInfoOf(address):(uint128,uint128)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LYNKNFT__mintInfoOfResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nameUsed(param0: string): boolean {
    let result = super.call("nameUsed", "nameUsed(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBoolean();
  }

  try_nameUsed(param0: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("nameUsed", "nameUsed(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  nftInfo(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call("nftInfo", "nftInfo(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBigInt();
  }

  try_nftInfo(param0: BigInt, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nftInfo",
      "nftInfo(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftInfoOf(_tokenId: BigInt): Array<BigInt> {
    let result = super.call("nftInfoOf", "nftInfoOf(uint256):(uint256[])", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBigIntArray();
  }

  try_nftInfoOf(_tokenId: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall("nftInfoOf", "nftInfoOf(uint256):(uint256[])", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AdminCall extends ethereum.Call {
  get inputs(): AdminCall__Inputs {
    return new AdminCall__Inputs(this);
  }

  get outputs(): AdminCall__Outputs {
    return new AdminCall__Outputs(this);
  }
}

export class AdminCall__Inputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }
}

export class AdminCall__Outputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }

  get admin_(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ChangeAdminCall extends ethereum.Call {
  get inputs(): ChangeAdminCall__Inputs {
    return new ChangeAdminCall__Inputs(this);
  }

  get outputs(): ChangeAdminCall__Outputs {
    return new ChangeAdminCall__Outputs(this);
  }
}

export class ChangeAdminCall__Inputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeAdminCall__Outputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }
}

export class ImplementationCall extends ethereum.Call {
  get inputs(): ImplementationCall__Inputs {
    return new ImplementationCall__Inputs(this);
  }

  get outputs(): ImplementationCall__Outputs {
    return new ImplementationCall__Outputs(this);
  }
}

export class ImplementationCall__Inputs {
  _call: ImplementationCall;

  constructor(call: ImplementationCall) {
    this._call = call;
  }
}

export class ImplementationCall__Outputs {
  _call: ImplementationCall;

  constructor(call: ImplementationCall) {
    this._call = call;
  }

  get implementation_(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}

export class __LYNKNFT_initCall extends ethereum.Call {
  get inputs(): __LYNKNFT_initCall__Inputs {
    return new __LYNKNFT_initCall__Inputs(this);
  }

  get outputs(): __LYNKNFT_initCall__Outputs {
    return new __LYNKNFT_initCall__Outputs(this);
  }
}

export class __LYNKNFT_initCall__Inputs {
  _call: __LYNKNFT_initCall;

  constructor(call: __LYNKNFT_initCall) {
    this._call = call;
  }
}

export class __LYNKNFT_initCall__Outputs {
  _call: __LYNKNFT_initCall;

  constructor(call: __LYNKNFT_initCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _payment(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintWithPermitCall extends ethereum.Call {
  get inputs(): MintWithPermitCall__Inputs {
    return new MintWithPermitCall__Inputs(this);
  }

  get outputs(): MintWithPermitCall__Outputs {
    return new MintWithPermitCall__Outputs(this);
  }
}

export class MintWithPermitCall__Inputs {
  _call: MintWithPermitCall;

  constructor(call: MintWithPermitCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _payment(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class MintWithPermitCall__Outputs {
  _call: MintWithPermitCall;

  constructor(call: MintWithPermitCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpgradeCall extends ethereum.Call {
  get inputs(): UpgradeCall__Inputs {
    return new UpgradeCall__Inputs(this);
  }

  get outputs(): UpgradeCall__Outputs {
    return new UpgradeCall__Outputs(this);
  }
}

export class UpgradeCall__Inputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }

  get _attr(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _point(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _payment(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class UpgradeCall__Outputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }
}

export class UpgradeWithPermitCall extends ethereum.Call {
  get inputs(): UpgradeWithPermitCall__Inputs {
    return new UpgradeWithPermitCall__Inputs(this);
  }

  get outputs(): UpgradeWithPermitCall__Outputs {
    return new UpgradeWithPermitCall__Outputs(this);
  }
}

export class UpgradeWithPermitCall__Inputs {
  _call: UpgradeWithPermitCall;

  constructor(call: UpgradeWithPermitCall) {
    this._call = call;
  }

  get _attr(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _point(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _payment(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[6].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }
}

export class UpgradeWithPermitCall__Outputs {
  _call: UpgradeWithPermitCall;

  constructor(call: UpgradeWithPermitCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _logic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _admin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
