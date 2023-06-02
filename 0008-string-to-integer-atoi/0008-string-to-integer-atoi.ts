const UPPER_BOUND = 2147483647 // 2 ** 31 -1
const LOWER_BOUND = -2147483648 // -(2 ** 31)

function myAtoi(s: string): number {
  const newS = s.trimStart()

  const isSigned = newS[0] === '-' || newS[0] === '+'

  const isNegative = newS[0] === '-'

  let i = isSigned ? 1 : 0
  let ans = isNegative ? '-' : '';

  for (i; i < newS.length; i++) {
    if (newS[i] >= '0' && newS[i] <= '9') {
      ans += newS[i];

    } else  
        break 
  }

  if (ans === '' || ans === '-') return 0;

  let ansInt = parseInt(ans);

  if (ansInt < LOWER_BOUND)
    return LOWER_BOUND
  if (ansInt > UPPER_BOUND)
    return UPPER_BOUND

  return ansInt
};