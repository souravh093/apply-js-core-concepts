// 1. variable
var name = 'khan';

// math operation: +, -, *, /
// shorthand: +=, -=, *=, /=
// ++, --

// 2. Array
var friendName = ['lolaa', 'bolla', 'molla', 'tolla', 'nolla'];

var spacialFriend = friendName[2]; // get array name
console.log(spacialFriend);

var setFriend = friendName[5] = "tolla";
console.log(friendName);


// 3. condition
// >, <, <=, >=, ==, ===, != !==
if(friendName.length < 2) {
    console.log("We don't have any friend any time");
} else {
    console.log('we have lot more friend in my life');
}

// 4. loop
// while loop
var num = 0;
while(num < 6) {
    console.log(num);
    num++;
}

// for loop
for(var i=0; i<10; i++) {
    console.log(i);
}

// 5. function
function isMoonUp(time) {
     if(time < 7){
        return "chad utcha";
     }
}

var isMoonGetUp = isMoonUp(5);
console.log(isMoonGetUp);

// 6. object

var jans = {
    height: 5.2,
    romantic: true,
    takaAcha: "ha asa",
    weight: "48 kg",
    careKora: true
};






