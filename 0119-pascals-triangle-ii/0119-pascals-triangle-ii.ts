function getRow(rowIndex: number): number[] {
       
    if (rowIndex === 0) return [1];

    
    if (rowIndex === 1) return[1,1]
    let layer : number[] = [1,2,1]
    for (let i = 3; i <= rowIndex; i++) {
        let temp = new Array(i+1)
        temp[0] = 1;
        temp[temp.length-1] = 1;


        for (let j = 1; j < i; j++) {
            temp[j] = layer[j - 1] + layer[j]
        }
        layer = temp

    }

    return layer

};