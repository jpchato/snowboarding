function gearType(){
    var gear = prompt('what kind of gear do you need?');
    
    if (gear === ("gloves" || "jackets")){
    alert(gear + ' protect you from the cold!');
    return (gear + "will help protect you!</strong>");
    var item, quantity; 
    quantity = prompt("how many do you want?");
    while ( isNaN(quantity)){
        quantity = prompt("Please enter a number like 6")
    };
    } else {alert(gear + '!! We only have gloves and jackets');
    return (gearType());
    }
}

function quantity(){
    for ( i = 0; i <= 4; i++){
        document.write(i);
        }
    }