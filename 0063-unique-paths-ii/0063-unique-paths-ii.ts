function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length



    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1)
        return 0

    let map = []

    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        map.push(row);
    }



    for (let i = 0; i < m; i++) {
        map[i][0] = 1

        if (obstacleGrid[i][0] === 1) {
            map[i][0] = 0
            break;
        }

    }
     for (let i = 0; i < n; i++) {
        map[0][i] = 1

        if (obstacleGrid[0][i] === 1) {
            map[0][i] = 0
            break;
        }

    }


    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if ( obstacleGrid[i][j] !== 1 )
                map[i][j] = map[i - 1][j] + map[i][j - 1]
        }
    }


    return map[m - 1][n - 1]


};