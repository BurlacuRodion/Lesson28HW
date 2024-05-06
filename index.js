// const getData = async () => {
//     try{
//         const resp = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
//         const data = await resp.json();

//         console.log(data)
//     }catch(e){console.log(e)}
// }
// getData()

// Array.prototype.myFunc = function(callback) {
//     return this.reduce((acc, curr, idx, arr)=>{
//         if(acc) return acc;
//         return callback(curr, idx, arr)
//     },false)
// }
// console.log([4,5,6,7].myFunc(el => el > 7)) // false


