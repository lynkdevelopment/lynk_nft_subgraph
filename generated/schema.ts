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

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("approved", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExampleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get approved(): Bytes {
    let value = this.get("approved");
    return value!.toBytes();
  }

  set approved(value: Bytes) {
    this.set("approved", Value.fromBytes(value));
  }
}

export class Cancel extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("index", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Cancel entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Cancel must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Cancel", id.toString(), this);
    }
  }

  static load(id: string): Cancel | null {
    return changetype<Cancel | null>(store.get("Cancel", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }
}

export class MarketInitialized extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("version", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MarketInitialized entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MarketInitialized must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MarketInitialized", id.toString(), this);
    }
  }

  static load(id: string): MarketInitialized | null {
    return changetype<MarketInitialized | null>(
      store.get("MarketInitialized", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get version(): i32 {
    let value = this.get("version");
    return value!.toI32();
  }

  set version(value: i32) {
    this.set("version", Value.fromI32(value));
  }
}

export class List extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("seller", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("index", Value.fromBigInt(BigInt.zero()));
    this.set("acceptToken", Value.fromBytes(Bytes.empty()));
    this.set("priceInAcceptToken", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save List entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type List must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("List", id.toString(), this);
    }
  }

  static load(id: string): List | null {
    return changetype<List | null>(store.get("List", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
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

export class Take extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("buyer", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("index", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Take entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Take must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Take", id.toString(), this);
    }
  }

  static load(id: string): Take | null {
    return changetype<Take | null>(store.get("Take", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }
}

export class UserInitialized extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("version", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserInitialized entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserInitialized must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserInitialized", id.toString(), this);
    }
  }

  static load(id: string): UserInitialized | null {
    return changetype<UserInitialized | null>(store.get("UserInitialized", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get version(): i32 {
    let value = this.get("version");
    return value!.toI32();
  }

  set version(value: i32) {
    this.set("version", Value.fromI32(value));
  }
}

export class LevelUp extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("level", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LevelUp entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LevelUp must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LevelUp", id.toString(), this);
    }
  }

  static load(id: string): LevelUp | null {
    return changetype<LevelUp | null>(store.get("LevelUp", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get level(): i32 {
    let value = this.get("level");
    return value!.toI32();
  }

  set level(value: i32) {
    this.set("level", Value.fromI32(value));
  }
}
