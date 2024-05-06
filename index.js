// const getData = async () => {
//     try{
//         const resp = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
//         const data = await resp.json();

//         console.log(data)
//     }catch(e){console.log(e)}
// }
// getData()

// Array.prototype.mySome = function(callback) {
//     return this.reduce((acc, curr, idx, arr)=>{
//         if(acc) return acc;
//         return callback(curr, idx, arr)
//     },false)
// }
// console.log([4,5,6,7].mySome(el => el > 7)) // false

// Array.prototype.myEvery = function(callback) {
//     return this.reduce((acc, curr, idx, arr)=>{
//         if(!acc) return acc;
//         return callback(curr, idx, arr)
//     }, true)
// }
// console.log([1,2,3].myEvery( item => item < 4)) //true

Array.prototype.mySlice = function(first, last) {

    const startIdx = first ? first < 0 ? this.length - 1 - Math.abs(first) : first : 0;
    const lastIdx = last ? last < 0 ? this.length - 1 - Math.abs(last) : last : 0;

    return this.reduce((acc, curr, idx) => {
        if(idx >= startIdx && idx <= lastIdx) {
            acc.push(curr)
            return acc;
        }
        return acc;
    },[])
}

console.log([1,2,3,4,5,6,7].slice(3,7))
console.log([1,2,3,4,5,6,7].mySlice(3,7))

