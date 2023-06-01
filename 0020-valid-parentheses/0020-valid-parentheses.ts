const bracketMap = { ')': '(', "}": "{", "]": "[" }
function isValid(s: string): boolean {

    if (s.length % 2 !== 0) return false;
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[")
            stack.push(s[i])
        if (s[i] === ")" || s[i] === "}" || s[i] === "]")
            if (stack.pop() !== bracketMap[s[i]])
                return false
    }
    return (stack.length === 0)

};