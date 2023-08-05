/* Expected Output:

Statement: Write a function which should accept
a string which contains letters and numbers, and
should return an object with two key value pair.
First key should be the sum of all the odd numbers 
present in the string in the name of "sum" and type 
of "number" and the other key should contain the 
concatenation of all the odd nos present in the name
of "string" and type of "string".

Please see the below example:

Input: '2R5a3j1a6B7a9r1a4d'

Output = {
    sum: 26, //5+3+1+7+9+1
    string: '531791'
}

*/



const oddFilter = (() => {
    const str = '2R5a3j1a6B7a9r1a4d';
    let output = {
        sum: 0,
        string: ''
    };
    str.split("").map((char)=>{
        if(!Number.isNaN(parseInt(char)) && parseInt(char) % 2 !== 0){
            output.sum += parseInt(char);
            output.string += char;
        }
    })
    console.log(output)
})();
//oddFilter(str);