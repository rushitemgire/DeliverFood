// console.log('Welcome to BiteBox..!!');

let rest = 'BiteBox';
// console.log('Welcome to ' + rest + '..!!');

// let customer = prompt('Welcome to '+rest+'..!! \n\nWhat is your Name?');

// alert('Hello '+customer+'..!! \n\nWelcome to '+rest+'..!!');

// let explore = confirm('Would you like to explore our menu?');

// if (explore) {
//     alert("Great! Let's explore the BiteBox menu.");
// }
// else {
//     alert("No problem! You can explore the menu anytime.");
// }

// let choice = prompt('Choose your Favourite Category:\n'+
//     '1. Biryani\n'+
//     '2. Pizza\n'+
//     '3. Burger\n'+
//     '4. Sandwich'
// );

// switch(choice) {
//     case '1':
//         console.log('You selected Biryani');
//         break;
//     case '2':
//         console.log('You selected Pizza');
//         break;
//     case '3':
//         console.log('You selected Burger');
//         break;
//     case '4':
//         console.log('You selected Sandwich');
//         break;
//     default:
//         console.log('Sorry invalid value. Please Try again');
// }


// for(initialization; condition; incr/decr){
//     // code block 
// }

for(let i=1; i<3; i++) {
    let food = prompt('Which is your favourite food?');
    let qt = prompt('Quantity for '+ food +'?');
    console.log(food + ' Quantity- '+qt);
}