window.onload = function () {
    //bar chart
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");


    // JSON array
    var fruit = [{ name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 5, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 10, color: "purple" }];

    // Bar chart
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // Constants
    var barHeight = 50;
    var maxQuantity = 20;
    var canvasHeight = canvas.height - 20;
    var startX = 20;
    var startY = 30;
    var posA = 50;
    var posB = 50;


    // Draw bars
    for (var i = 0; i < fruit.length; i++) {
        var y = startY;
        var width = fruit[i].quantity / maxQuantity * canvasHeight;
        var color = fruit[i].color;
        context.fillStyle = color;
        context.fillRect(startX, y, width, barHeight);
        startY += 60;
    }

    //label on
    for (var i = 0; i < fruit.length; i++) {
        context.font = "25px Arial";
        context.strokeText(fruit[i].name,posA, posB);
        context.strokeText(fruit[i].quantity,posA+120, posB);
        posB += 63;

    }






    }