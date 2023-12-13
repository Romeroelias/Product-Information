// Variables
const userInputContainer = document.getElementById("userinput-container");

//SUBMIT FUNCTION//
document.getElementById('submitButton').onclick = function(){
//input variables//
let item = document.getElementById('item').value;
let sales = document.getElementById('sales').value;

//POPULARITY FUNCTION//
popularity();

function popularity(){

    let popular = "Popular";
    let NotAsPopular = "Not As Popular";
    let NotPopular = "Not popular";
    if (sales >= 100){
        return popular;
    }

    else if(sales < 50){
        return NotPopular;
    }
    
    else{
        return NotAsPopular;
    }
}


//creating new HTML elements//
let newDiv = document.createElement('div');
newDiv.classList.add('newdiv-css');
userInputContainer.append(newDiv);

newDiv.innerHTML = `${item} <hr> ${popularity()}`;
}

