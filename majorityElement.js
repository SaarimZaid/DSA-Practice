/* let a = ["apple", "mango", "orange", "apple", "banana"];
let b = ["guava", "mango", "lichi"]
// let newArr = a.concat(b)
let unique = new Set(a.concat(b))
unique.add({fruit:'grapes'})

unique.forEach(e => {
    console.log(e)  
}) */

function maj(A){
    // let arr = []
		for(let i=0; i<A.length; i++){
			Number(A[i])
			// arr.push(num)
            // console.log(num)
		}
        A.sort((a,b)=>{
			return a-b
		})
		return A[parseInt(A.length/2)]
}
let A = [2,1,2]
console.log(maj(A))