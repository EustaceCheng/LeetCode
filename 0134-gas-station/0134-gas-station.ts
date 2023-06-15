function canCompleteCircuit(gas: number[], cost: number[]): number {

    const l = gas.length
    let start = 0
    let accuSum = 0
    let tank = 0

    for (let i = 0; i < l; i++) {
        const cur = gas[i] - cost[i]
        accuSum += cur
        tank+=cur
        if (tank <0) {
            tank = 0
            start = i +1
        }

    }

    if (accuSum < 0)
        return -1

    return start 

};