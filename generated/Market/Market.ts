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

export class Cancel extends ethereum.Event {
  get params(): Cancel__Params {
    return new Cancel__Params(this);
  }
}

export class Cancel__Params {
  _event: Cancel;

  constructor(event: Cancel) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MarketInitialized extends ethereum.Event {
  get params(): MarketInitialized__Params {
    return new MarketInitialized__Params(this);
  }
}

export class MarketInitialized__Params {
  _event: MarketInitialized;

  constructor(event: MarketInitialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class List extends ethereum.Event {
  get params(): List__Params {
    return new List__Params(this);
  }
}

export class List__Params {
  _event: List;

  constructor(event: List) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get acceptToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get priceInAcceptToken(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Take extends ethereum.Event {
  get params(): Take__Params {
    return new Take__Params(this);
  }
}

export class Take__Params {
  _event: Take;

  constructor(event: Take) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get index(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Market__listNFTsResult {
  value0: Address;
  value1: BigInt;
  value2: Address;
  value3: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: Address,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Market extends ethereum.SmartContract {
  static bind(address: Address): Market {
    return new Market("Market", address);
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

  listIndexByTokenId(param0: BigInt): BigInt {
    let result = super.call(
      "listIndexByTokenId",
      "listIndexByTokenId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_listIndexByTokenId(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "listIndexByTokenId",
      "listIndexByTokenId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  listNFTs(param0: BigInt): Market__listNFTsResult {
    let result = super.call(
      "listNFTs",
      "listNFTs(uint256):(address,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Market__listNFTsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt()
    );
  }

  try_listNFTs(param0: BigInt): ethereum.CallResult<Market__listNFTsResult> {
    let result = super.tryCall(
      "listNFTs",
      "listNFTs(uint256):(address,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Market__listNFTsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt()
      )
    );
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onSellNum(): BigInt {
    let result = super.call("onSellNum", "onSellNum():(uint256)", []);

    return result[0].toBigInt();
  }

  try_onSellNum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("onSellNum", "onSellNum():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get dbAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class __Market_initCall extends ethereum.Call {
  get inputs(): __Market_initCall__Inputs {
    return new __Market_initCall__Inputs(this);
  }

  get outputs(): __Market_initCall__Outputs {
    return new __Market_initCall__Outputs(this);
  }
}

export class __Market_initCall__Inputs {
  _call: __Market_initCall;

  constructor(call: __Market_initCall) {
    this._call = call;
  }
}

export class __Market_initCall__Outputs {
  _call: __Market_initCall;

  constructor(call: __Market_initCall) {
    this._call = call;
  }
}

export class __baseContract_initCall extends ethereum.Call {
  get inputs(): __baseContract_initCall__Inputs {
    return new __baseContract_initCall__Inputs(this);
  }

  get outputs(): __baseContract_initCall__Outputs {
    return new __baseContract_initCall__Outputs(this);
  }
}

export class __baseContract_initCall__Inputs {
  _call: __baseContract_initCall;

  constructor(call: __baseContract_initCall) {
    this._call = call;
  }
}

export class __baseContract_initCall__Outputs {
  _call: __baseContract_initCall;

  constructor(call: __baseContract_initCall) {
    this._call = call;
  }
}

export class CancelListCall extends ethereum.Call {
  get inputs(): CancelListCall__Inputs {
    return new CancelListCall__Inputs(this);
  }

  get outputs(): CancelListCall__Outputs {
    return new CancelListCall__Outputs(this);
  }
}

export class CancelListCall__Inputs {
  _call: CancelListCall;

  constructor(call: CancelListCall) {
    this._call = call;
  }

  get _listIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelListCall__Outputs {
  _call: CancelListCall;

  constructor(call: CancelListCall) {
    this._call = call;
  }
}

export class ListNFTCall extends ethereum.Call {
  get inputs(): ListNFTCall__Inputs {
    return new ListNFTCall__Inputs(this);
  }

  get outputs(): ListNFTCall__Outputs {
    return new ListNFTCall__Outputs(this);
  }
}

export class ListNFTCall__Inputs {
  _call: ListNFTCall;

  constructor(call: ListNFTCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _acceptToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _priceInAcceptToken(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListNFTCall__Outputs {
  _call: ListNFTCall;

  constructor(call: ListNFTCall) {
    this._call = call;
  }
}

export class TakeNFTCall extends ethereum.Call {
  get inputs(): TakeNFTCall__Inputs {
    return new TakeNFTCall__Inputs(this);
  }

  get outputs(): TakeNFTCall__Outputs {
    return new TakeNFTCall__Outputs(this);
  }
}

export class TakeNFTCall__Inputs {
  _call: TakeNFTCall;

  constructor(call: TakeNFTCall) {
    this._call = call;
  }

  get _listIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TakeNFTCall__Outputs {
  _call: TakeNFTCall;

  constructor(call: TakeNFTCall) {
    this._call = call;
  }
}
