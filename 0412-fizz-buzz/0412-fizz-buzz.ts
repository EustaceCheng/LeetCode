function fizzBuzz(n: number): string[] {
    
    let ans =[]
    for(let i=1;i<n+1;i++){ 
        if(i%3===0&&i%5===0){ 
            ans.push('FizzBuzz')
            continue
        }else{
             if(i%3 === 0){
                ans.push('Fizz')
                 continue

            }
            if(i%5===0){
                ans.push('Buzz')
continue
            }
        }
       
         
        ans.push(`${i}`)
    }        
    return ans
};