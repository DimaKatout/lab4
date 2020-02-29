"use strict";
var sum = 0;
alert('welcomee');
var hello = prompt('please enter your name ');
alert('hello ' + hello);



function catPho() {
    var cat = prompt('do you think i have a phobia from cats ?');
    cat = cat.toLowerCase();
    console.log(cat);
    if (cat == 'n' || cat == 'no') {
        var c = alert('you got it right ');
        sum = sum + 1;
        return c;
    }
    else {
        var ca = alert('you got it wrong ');
        return ca;
    }
}

function favColor() {
    var favCol = prompt('do you think red is my favorite color ');
    favCol = favCol.toLowerCase();
    if (favCol == 'y' || favCol == 'yes') {
        var col = alert('you got it correct');
        sum = sum + 1;
        return col;
    }
    else {
        var color = alert('wrong awnser');
        return color;
    }

}

function myAge() {
    var age = prompt('do you think i\'m 23? ');
    age = age.toLowerCase();
    if (age == 'y' || age == 'yes') {
        var a = alert('you got it right');
        sum = sum + 1;
        return a;
    }
    else {
        var ag = alert('wrong ');
        return ag;
    }
}


function smartt() {
    var smart = prompt('do you think im smart ');
    smart = smart.toLowerCase();
    if (smart == 'y' || smart == 'yes') {
        var s = alert('you got it correct');
        sum = sum + 1;
        return s;
    }
    else {
        var sm = alert('noo wrong');
        return sm;
    }
}

function foodd() {
    var food = prompt('do i love food? ');
    food = food.toLowerCase();
    switch (food) {
        //hoon ba7ot bel case small letters la2no hala2 kol shi 7ayd5ol 3aliha 7aykon t7awal la small

        case 'y':
        case 'yes':
            {
                var f = alert('yes you got it correct');
                sum = sum + 1;
                return f;
                break;
            }

        case 'n':
        case 'no':
            {
                var fo = alert('you got it wrong');
                return fo;
                break;
            }
    }
}

function guessNum() {
    for (var i = 0; i <= 3; i++) {
        var num = prompt('guess a number please');
        if (num == 10) {
            var n = alert('bravoooooo');
            sum = sum + 1;
            return n;

            break;
        }


        else if (num > 10) {
            var n = alert('too high');
            //return n;
        }
        else if (num < 10) {
            var n = alert('too low ');
            //return n;
        }
    return n;
    }
}
alert('the awnser is 10');


function oddNumber() {
    var arr = [1, 3, 5, 7, 9];






    //console.log(oddNum);
    for (var i = 0; i < 5; i++) {
        {

            for (var j = 0; j < arr.length; j++) {
                var oddNum = prompt('guess an even number less than 11 and bigger than zero ');
                //console.log(arr[i]);
                //console.log(i);
                //console(oddNum);
                if (oddNum == arr[i]) {
                    var o = alert('you got it correct');
                    sum = sum + 1;
                    return o;
                    break;
                }
                else {
                    var oo = alert('you got it wrong');
                    return oo;
                }
            } break;



        }






    }


}

function playGame() {
    catPho();
    favColor();
    myAge();
    smartt();
    foodd();
    guessNum();
    oddNumber();
}

playGame();

alert('you got  ' + sum + '  out of 7');
alert('the possible awnsers is 1 ,3 ,5 ,7 ,9 ');
alert('thank you for visiting ');



