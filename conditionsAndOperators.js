function testA(age1,gen) {
  let age = 31;//age1
let gender  = "M"//gen
console.log("gender:",gender, "age:",age);

if( (age > 30 ) && (gender == "M") ){

   console.log("SCOLERSHIP NOT ALLOWED")

}else if(age <= 30 && gender == "M") {

   console.log("50% SCOLERSHIP ALLOWED")
}

else if(gender == "F")
{
   console.log("CONGRATULATIONS!!! 100% allowed")
}
else{
   console.log("not allowed")
}
        }



function testB(age1 = 34, gen=""){  
let age = age1
let gender  = gen
console.log("gender:",gender, "age:",age);
 
if(age == 30 && gender == "M" ){
 
   console.log("SCOLERSHIP NOT ALLOWED")
 
} else if(gender == "F")
{
   console.log("CONGRATULATIONS!!!")
}
else{
  console.log("only 30 age is allowed ")
}
}


//testB(21,"F")
//testA(31,"M")

