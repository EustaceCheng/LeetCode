function dailyTemperatures(temperatures: number[]): number[] {
    const n: number = temperatures.length;
    const answer: number[] = new Array(n).fill(0);


    for (let i: number = n - 1,hottest = 0; i >= 0; i--) {
        const cur: number = temperatures[i];
        if (cur >= hottest) {
            hottest = cur;
            continue;
        }

        let days: number = 1;

        while (temperatures[i + days] <= cur) {
            days += answer[i + days];
        }
        answer[i] = days;
    }

    return answer;
}
