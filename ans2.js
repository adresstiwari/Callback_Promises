let ConvString="Hello, World!"


function logString(convertedString){
   console.log("The manipulated string is:",convertedString)
}


function manipulateString(str,callback){
   const convertedString =str.toUpperCase();
   return callback(convertedString)
}
manipulateString(ConvString,logString);