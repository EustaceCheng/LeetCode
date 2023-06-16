function isValidSudoku(board: string[][]): boolean {

    let rowMap = new Array(9).fill(new Map())
    for (let i = 0; i < 9; i++) {
        rowMap[i] = new Map()
    }
    let colMap = new Array(9).fill(new Map())
    for (let i = 0; i < 9; i++) {
        colMap[i] = new Map()
    }
    let squaMap = new Array(3)
    for (let i = 0; i < 3; i++) {


        squaMap[i] = new Array(3)
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            squaMap[i][j] = new Map()
        }
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            const cur = board[i][j]
            if (cur !== '.') {

                if (rowMap[i].has(cur)) {
                    return false
                }
                rowMap[i].set(cur, 1)

                if (colMap[j].has(cur)) {
                    return false
                }
                colMap[j].set(cur, 1)


                if (squaMap[Math.floor(i / 3)][Math.floor(j / 3)].has(cur)) {
                    console.log(`squaMap ${i}, ${j}`)

                    return false
                }
                squaMap[Math.floor(i / 3)][Math.floor(j / 3)].set(cur, 1)
            }
        }
    }

    return true
};