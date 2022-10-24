import {Address, BigInt} from "@graphprotocol/graph-ts"
import {
  LYNKNFT,
  Approval,
  ApprovalForAll,
  Initialized,
  Transfer,
  Upgrade
} from "../generated/LYNKNFT/LYNKNFT"
import { LYNKNFTEntity } from "../generated/schema"
import {DBContract} from "../generated/DBContract/DBContract";
import {DB_CONTRACT, LISTING_LYNKNFT, MARKET_CONTRACT, STAKING_LYNKNFT} from "../constants/constants";
import {Market} from "../generated/Market/Market";

export function handleApproval(event: Approval): void {
  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())
  //
  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())
  //
  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }
  //
  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)
  //
  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved
  //
  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.BLACK_HOLE(...)
  // - contract.DB_CONTRACT(...)
  // - contract.balanceOf(...)
  // - contract.exists(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.mintInfoOf(...)
  // - contract.name(...)
  // - contract.nftInfo(...)
  // - contract.nftInfoOf(...)
  // - contract.ownerOf(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleInitialized(event: Initialized): void {}

export function handleTransfer(event: Transfer): void {
  let entity = LYNKNFTEntity.load(event.params.tokenId.toString())
  if (!entity || event.params.from.toHex() === Address.zero().toHex()) {
    entity = new LYNKNFTEntity(event.params.tokenId.toString())

    const lynknft = LYNKNFT.bind(event.address)
    const info = lynknft.nftInfoOf(event.params.tokenId)
    entity.charisma = info[0].toU64()
    entity.vitality = info[1].toU64()
    entity.intellect = info[2].toU64()
    entity.dexterity = info[3].toU64()
  }
  if (event.params.to.toHex().toLowerCase() === STAKING_LYNKNFT.toLowerCase()) {
    entity.isStaking = true
  } else if (event.params.to.toHex().toLowerCase() === LISTING_LYNKNFT.toLowerCase()) {
    const marketContract = Market.bind(Address.fromString(MARKET_CONTRACT))
    const listIndex = marketContract.listIndexByTokenId(event.params.tokenId)
    const listInfo = marketContract.listNFTs(event.params.tokenId)
    entity.isList = true
    entity.listIndex = listIndex
    entity.acceptToken = listInfo.value2
    entity.priceInAcceptToken = listInfo.value3
  } else {
    entity.isList = false
    entity.listIndex = BigInt.zero()
    entity.acceptToken = Address.zero()
    entity.priceInAcceptToken = BigInt.zero()
    entity.isStaking = false
    entity.owner = event.params.to
  }

  entity.save()
}

export function handleUpgrade(event: Upgrade): void {
  let entity = LYNKNFTEntity.load(event.params.tokenId.toString())
  if (entity) {
    if (event.params.attr == 0)
      entity.charisma += event.params.point.toU64()
    else if (event.params.attr == 1)
      entity.vitality += event.params.point.toU64()
    else if (event.params.attr == 2)
      entity.intellect += event.params.point.toU64()
    else if (event.params.attr == 3)
      entity.dexterity += event.params.point.toU64()

    const dbContract = DBContract.bind(Address.fromString(DB_CONTRACT))
    const level = dbContract.calcTokenLevel(event.params.tokenId)
    entity.level = level.toU64()

    entity.save()
  }
}