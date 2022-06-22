import {UnwrapNestedRefs} from "vue";

export type Inventory = UnwrapNestedRefs<{}>

export type InventoryGetter = (key: string) => Inventory | null
export type InventorySetter = (key: string, item: Inventory) => void
export type InventoryChecker = (key: string) => boolean

export type useInventoryReturn = {
    inventory: Inventory,
    get: InventoryGetter,
    set: InventorySetter,
    has: InventoryChecker,
}

export type useInventoryFunction = () => useInventoryReturn