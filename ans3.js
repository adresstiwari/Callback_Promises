const user = {
    first_Name : "Yash",
    last_name  : "Gautam",
    age_in_years: 23
    }

function nameLog(full_name,ageDays){
    console.log(`The person,'s full name is ${full_name} and their age in days is ${ageDays} days`)
}


function ageInDays(obj,callback){
 let full_name = obj.first_Name+" "+obj.last_name
  let ageDays= (obj.age_in_years*365 +Math.floor(obj.age_in_years/4))
  return callback(full_name,ageDays)
}

ageInDays(user,nameLog);

