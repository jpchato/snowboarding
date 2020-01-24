function hello(){
    var today = new Date ();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome';
    }

    return greeting;

};









// break
// var d = new Date();
// var time = d.getHours();

// if (time < 12) {
//   document.write("<b>Seize the day!</b>");
// }
// if (time > 12) {
//   document.write("<b>Take a moment to breathe!</b>");
// }
// if (time == 12) {
//   document.write("<b>zen time!</b>");
// }
// break

// break
// var customerName = prompt("Please enter your name", "");
// if (customerName!= null) {
//     document.write("welcome").innerHTML =
//     "Hello " + customerName + "! How are you today?";
// }
// break


// break
// function shred(){
//     var pokemon = prompt('What is your favorite ice type pokemon?');

//     alert(pokemon + ' probably snowboards!');
// }

//     return alert;
// };
// break

// break
// var showOrder = function (){
//     var order = prompt("What kind of gloves would you like to order?");

//     if(order === null) {
//         write = '<img src=>"images/house.png" >';
//     }
    
//     return item;
// }
// break

// break
// function time(){

//     var d = new Date();
//     var time = d.getHours();
//     var greeting; 
  
//     if (time < 12) {
//       greeting = 'Rise and Shine';
//     }if (time > 12) {
//       greeting = 'Time to Ride the Slopes');
//     }if (time == 12) {
//       greeting = 'AFK BRB Lunch';
//     }
  
//     return greeting;
  
//   };
// break