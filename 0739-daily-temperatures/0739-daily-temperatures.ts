function dailyTemperatures(temperatures: number[]): number[] {
    const n: number = temperatures.length;
    const answer: number[] = new Array(n).fill(0);

    for (let i: number = n - 1, hottest = 0; i >= 0; i--) {
      const t: number = temperatures[i];
      if (t >= hottest) {
        hottest = t;
        continue;
      }

      let days: number = 1;
      while (temperatures[i + days] <= t) {
        days += answer[i + days];
      }
      answer[i] = days;
    }

    return answer;
}
