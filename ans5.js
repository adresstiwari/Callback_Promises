let Name= "Adarsh"


let myPromise = new Promise (function(resolve,reject) {
   let greetings=`Hello, ${Name}`
resolve(greetings);
});
myPromise.then(function(greetings){
    console.log(greetings)
})
function main(Name){
   return myPromise;
}
main();