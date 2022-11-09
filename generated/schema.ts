// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class LYNKNFTEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("level", Value.fromI32(0));
    this.set("isList", Value.fromBoolean(false));
    this.set("listIndex", Value.fromI32(0));
    this.set("isStaking", Value.fromBoolean(false));
    this.set("charisma", Value.fromI32(0));
    this.set("vitality", Value.fromI32(0));
    this.set("intellect", Value.fromI32(0));
    this.set("dexterity", Value.fromI32(0));
    this.set("name", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LYNKNFTEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LYNKNFTEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LYNKNFTEntity", id.toString(), this);
    }
  }

  static load(id: string): LYNKNFTEntity | null {
    return changetype<LYNKNFTEntity | null>(store.get("LYNKNFTEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get level(): i32 {
    let value = this.get("level");
    return value!.toI32();
  }

  set level(value: i32) {
    this.set("level", Value.fromI32(value));
  }

  get isList(): boolean {
    let value = this.get("isList");
    return value!.toBoolean();
  }

  set isList(value: boolean) {
    this.set("isList", Value.fromBoolean(value));
  }

  get listIndex(): i32 {
    let value = this.get("listIndex");
    return value!.toI32();
  }

  set listIndex(value: i32) {
    this.set("listIndex", Value.fromI32(value));
  }

  get isStaking(): boolean {
    let value = this.get("isStaking");
    return value!.toBoolean();
  }

  set isStaking(value: boolean) {
    this.set("isStaking", Value.fromBoolean(value));
  }

  get charisma(): i32 {
    let value = this.get("charisma");
    return value!.toI32();
  }

  set charisma(value: i32) {
    this.set("charisma", Value.fromI32(value));
  }

  get vitality(): i32 {
    let value = this.get("vitality");
    return value!.toI32();
  }

  set vitality(value: i32) {
    this.set("vitality", Value.fromI32(value));
  }

  get intellect(): i32 {
    let value = this.get("intellect");
    return value!.toI32();
  }

  set intellect(value: i32) {
    this.set("intellect", Value.fromI32(value));
  }

  get dexterity(): i32 {
    let value = this.get("dexterity");
    return value!.toI32();
  }

  set dexterity(value: i32) {
    this.set("dexterity", Value.fromI32(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }
}

export class MintLogEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("eventTime", Value.fromI32(0));
    this.set("num", Value.fromI32(0));
    this.set("tx", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MintLogEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MintLogEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MintLogEntity", id.toString(), this);
    }
  }

  static load(id: string): MintLogEntity | null {
    return changetype<MintLogEntity | null>(store.get("MintLogEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get eventTime(): i32 {
    let value = this.get("eventTime");
    return value!.toI32();
  }

  set eventTime(value: i32) {
    this.set("eventTime", Value.fromI32(value));
  }

  get num(): i32 {
    let value = this.get("num");
    return value!.toI32();
  }

  set num(value: i32) {
    this.set("num", Value.fromI32(value));
  }

  get tx(): Bytes {
    let value = this.get("tx");
    return value!.toBytes();
  }

  set tx(value: Bytes) {
    this.set("tx", Value.fromBytes(value));
  }
}

export class RegisterLogEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("eventTime", Value.fromI32(0));
    this.set("inviter", Value.fromBytes(Bytes.empty()));
    this.set("tx", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RegisterLogEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RegisterLogEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RegisterLogEntity", id.toString(), this);
    }
  }

  static load(id: string): RegisterLogEntity | null {
    return changetype<RegisterLogEntity | null>(
      store.get("RegisterLogEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get eventTime(): i32 {
    let value = this.get("eventTime");
    return value!.toI32();
  }

  set eventTime(value: i32) {
    this.set("eventTime", Value.fromI32(value));
  }

  get inviter(): Bytes {
    let value = this.get("inviter");
    return value!.toBytes();
  }

  set inviter(value: Bytes) {
    this.set("inviter", Value.fromBytes(value));
  }

  get tx(): Bytes {
    let value = this.get("tx");
    return value!.toBytes();
  }

  set tx(value: Bytes) {
    this.set("tx", Value.fromBytes(value));
  }
}

export class StakingLogEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromI32(0));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("eventType", Value.fromString(""));
    this.set("eventTime", Value.fromI32(0));
    this.set("tx", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakingLogEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakingLogEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakingLogEntity", id.toString(), this);
    }
  }

  static load(id: string): StakingLogEntity | null {
    return changetype<StakingLogEntity | null>(
      store.get("StakingLogEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): i32 {
    let value = this.get("tokenId");
    return value!.toI32();
  }

  set tokenId(value: i32) {
    this.set("tokenId", Value.fromI32(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get eventType(): string {
    let value = this.get("eventType");
    return value!.toString();
  }

  set eventType(value: string) {
    this.set("eventType", Value.fromString(value));
  }

  get eventTime(): i32 {
    let value = this.get("eventTime");
    return value!.toI32();
  }

  set eventTime(value: i32) {
    this.set("eventTime", Value.fromI32(value));
  }

  get tx(): Bytes {
    let value = this.get("tx");
    return value!.toBytes();
  }

  set tx(value: Bytes) {
    this.set("tx", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class UserEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("level", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserEntity", id.toString(), this);
    }
  }

  static load(id: string): UserEntity | null {
    return changetype<UserEntity | null>(store.get("UserEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get level(): i32 {
    let value = this.get("level");
    return value!.toI32();
  }

  set level(value: i32) {
    this.set("level", Value.fromI32(value));
  }
}

export class MarketGoodsEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("onSale", Value.fromBoolean(false));
    this.set("seller", Value.fromBytes(Bytes.empty()));
    this.set("index", Value.fromI32(0));
    this.set("acceptToken", Value.fromBytes(Bytes.empty()));
    this.set("priceInAcceptToken", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MarketGoodsEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MarketGoodsEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MarketGoodsEntity", id.toString(), this);
    }
  }

  static load(id: string): MarketGoodsEntity | null {
    return changetype<MarketGoodsEntity | null>(
      store.get("MarketGoodsEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get onSale(): boolean {
    let value = this.get("onSale");
    return value!.toBoolean();
  }

  set onSale(value: boolean) {
    this.set("onSale", Value.fromBoolean(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get index(): i32 {
    let value = this.get("index");
    return value!.toI32();
  }

  set index(value: i32) {
    this.set("index", Value.fromI32(value));
  }

  get acceptToken(): Bytes {
    let value = this.get("acceptToken");
    return value!.toBytes();
  }

  set acceptToken(value: Bytes) {
    this.set("acceptToken", Value.fromBytes(value));
  }

  get priceInAcceptToken(): BigInt {
    let value = this.get("priceInAcceptToken");
    return value!.toBigInt();
  }

  set priceInAcceptToken(value: BigInt) {
    this.set("priceInAcceptToken", Value.fromBigInt(value));
  }
}
