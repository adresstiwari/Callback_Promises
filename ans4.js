const books = [
    {Title:'Train Dreams', Author :'Denis Johnson', Year:2011 },
    {Title:'The Tigers Wife', Author:'Téa Obreht', Year: 2013},
    {Title:'Salvage the Bones', Author:'Jesmyn Ward', Year:2014},
    {Title:'The book Thief', Author:'Markus Zusak', Year:2006},
    {Title:'The Road', Author:'Cormac', Year:2007},
    {Title:'The Kite Runner', Author:'Hosseini', Year:2008},
]
function bookLog(newList){
   newList.sort();
    console.log(newList.join(","));
}
function program(arr,callback){
const newList= arr.map((ele)=>ele.Title)
callback(newList);
}

program(books,bookLog);