"use strict";

var Game = {
    canvas: undefined,
    canvasContext: undefined,
    car: undefined,
    carPosition: { x: -500, y: 500 },
    person: undefined,
    zebra: undefined,
    trafficLight: undefined,
    bubble: undefined,

};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");

    Game.car = new Image();
    Game.car.src = "car.png";
    window.setTimeout(Game.mainLoop, 800);

    Game.person = new Image();
    Game.person.src = "person.png";

    Game.zebra = new Image();
    Game.zebra.src = "zebra.png";

    Game.trafficLight = new Image();
    Game.trafficLight.src = "tl.png";

    Game.bubble = new Image();
    Game.bubble.src = "bubble.png";


};

document.addEventListener('DOMContentLoaded', Game.start);



Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.drawImage = function (car, position) {
    Game.canvasContext.save();
    Game.canvasContext.translate(position.x, position.y);
    Game.canvasContext.drawImage(car, 0, 0, car.width, car.height,
        0, 0, car.width, car.height);
    Game.canvasContext.restore();
};

Game.drawImage2 = function (person, zebra, trafficLight,bubble) {
    Game.canvasContext.save();
    Game.canvasContext.drawImage(person, 1500, 5, 200, 400);
    Game.canvasContext.drawImage(zebra, 1350, 300, 500, 500);
    Game.canvasContext.drawImage(trafficLight, 900, 5, 150, 450);
    Game.canvasContext.drawImage(bubble, 1200, 5, 250, 250);
    Game.canvasContext.restore();
}

Game.mainLoop = function () {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 200);
};

Game.update = function () {
    var d = new Date();
    Game.carPosition.x = d.getTime() * 8.0 % Game.canvas.width;
};

Game.draw = function () {
    Game.drawImage2(Game.person, Game.zebra, Game.trafficLight,Game.bubble);
    Game.drawImage(Game.car, Game.carPosition);
    Game.canvasContext.font = "12px Comic Sans MS";
    Game.canvasContext.fillStyle = "red";
    Game.canvasContext.fillText("Is he over speed and cross the redlight?", 1215, 113);
}; 



