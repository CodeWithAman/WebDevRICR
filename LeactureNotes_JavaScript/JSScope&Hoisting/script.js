


// let a = 10;
// console.log(a);
// console.log(b);

// let b = 20;
// console.log(a);
// console.log(b);


let test = "This is global test variable";

function classA()
{
    console.log("ClassA", test)
}
function classB() {

    let test2 = "This is Local test Variable";
    console.log("ClassB", test)
    console.log("ClassB", test2)
}
function classC() {
    console.log("ClassC", test)
    console,log("ClassC" , test2)
}


classA();

classB();

// classC();



// Global Scope → Announcement heard everywhere
let announcement = "School will be closed tomorrow";

function classroom() {
  // Local Scope → Only this classroom
  let classMessage = "Complete your homework";

  console.log("Inside Classroom:");
  console.log(announcement); //  Global accessible
  console.log(classMessage); //  Local accessible

  if (true) {
    // Block Scope → Only inside this block (group discussion)
    let groupDiscussion = "Prepare for group presentation";

    console.log("Inside Group:");
    console.log(announcement);      //  Global
    console.log(classMessage);     //  Local
    console.log(groupDiscussion);  //  Block
  }

  // console.log(groupDiscussion);  Error (block scope)
}

classroom();

console.log("Outside Classroom:");
console.log(announcement); //  Global

// console.log(classMessage);  Error (local scope)
// console.log(groupDiscussion);  Error (block scope)