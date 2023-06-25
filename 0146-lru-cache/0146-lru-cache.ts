class LRUCache {

    capacity: number;
    cache: Map<number, number>

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map()

    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const value = this.cache.get(key)
            this.cache.delete(key);
            this.cache.set(key, value)
            return value
        }
        return -1

    }

    put(key: number, value: number): void {

        if (this.cache.size >= this.capacity && !this.cache.has(key)) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
        this.cache.delete(key)
        this.cache.set(key, value)



    }
}
