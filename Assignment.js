// 01-- feet to mile---

function feetToMile(feet) {
    var mile = feet * 0.00018939;
    return mile;
}
var result = feetToMile(20000);
console.log(result);



// 02---- woodcalculator======

function woodCalculator(chair, table, bed) {
    var result = chair * 1 + table * 2 + bed * 5;
    return result;
}
var totalWood = woodCalculator(3, 6, 2);
console.log(totalWood);



// 03---===--==- Brick calculator

function brickCalculator(tower) {
    if (tower <= 10) {
        var brick = tower * 15 * 1000;
        return brick;
    } else if (tower <= 20) {
        tower = tower - 10;
        var brick = 150000 + tower * 12 * 1000;
        return brick;
    } else {
        tower = tower - 20;
        var brick = 270000 + tower * 10 * 1000;
        return brick;
    }
}

var result = brickCalculator(20);
console.log(result);



// 04==== tinyfriend name===

function tinyFriend(arry) {
    var tinyName = arry[0];
    for (var i = 0; i < arry.length; i++) {
        if (arry[i].length < tinyName.length) {
            tinyName = arry[i];
        }
    }
    return tinyName;
}
console.log(tinyFriend(["akas", "kalam", "alomgir", "vivo", "pol"]))