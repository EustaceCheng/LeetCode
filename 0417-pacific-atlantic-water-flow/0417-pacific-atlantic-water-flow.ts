function pacificAtlantic(heights: number[][]): number[][] {
    const rows = heights.length;
    const cols = heights[0].length;

    let setP = new Set();
    let setA = new Set();

    const dfs = (x, y, max, visited) => {
        const isOverBoard = x < 0 || y < 0 || x > rows - 1 || y > cols - 1;
        const isVisited = visited.has(encode(x, y));
        if (isOverBoard || isVisited) return;

        const cur = heights[x][y];
        if (cur < max) return;
        visited.add(encode(x, y));

        dfs(x - 1, y, cur, visited);
        dfs(x + 1, y, cur, visited);
        dfs(x, y - 1, cur, visited);
        dfs(x, y + 1, cur, visited);
    };

    for (let i = 0; i < rows; i++) {
        // west coast
        dfs(i, 0, heights[i][0], setP);
        // east coast
        dfs(i, cols - 1, heights[i][cols - 1], setA);
    }

    for (let i = 0; i < cols; i++) {
        // north coast
        dfs(0, i, heights[0][i], setP);
        // south coast
        dfs(rows - 1, i, heights[rows - 1][i], setA);
    }

    let ans: number[][] = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const key = encode(i, j);
            if (setP.has(key) && setA.has(key)) {
                ans.push([i, j]);
            }
        }
    }
    return ans;
}

const encode = (x, y) => `${x} - ${y}`;
