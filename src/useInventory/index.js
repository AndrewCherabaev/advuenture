import {reactive} from 'vue'

export const useInventory = () => {
    const inventory = reactive({});

    return {
        inventory,
        get(key) {
            return inventory[key] || null
        },
        set(key, item) {
            inventory[key] = item
        },
        has(key) {
            return inventory[key] !== undefined
        }
    }
}