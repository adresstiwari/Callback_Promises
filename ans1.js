const array1=[2,3,4,5,6,7];
function doubleElement(e){
   return e*2;
}
function doubleEle(arr,callback){
 const doubleArray= arr.map(callback);
 return doubleArray
}
const doubledArray1=doubleEle(array1,doublElement);
console.log(doubledArray1);