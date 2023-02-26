window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.font = "25px Arial";
	ctx.strokeText("CISC 3610 HW1 Deren Mei", 150, 625);

    //loop to draw grass
    var x = 20;
    var y = 150;
    for (let i = 0; i < 4; i++) {
        drawCloud(ctx, x, y);
        x += 500;
    }

    var x = 5;
    var y = 850;
    for (let i = 0; i < 50; i++) {
        drawGrass(ctx, x, y);
        x += 70;
    }

    var x = 8;
    var y = 850;
    for (let i = 0; i < 50; i++) {
        drawGrass(ctx, x, y);
        x += 80;
    }

    var x = 9;
    var y = 850;
    for (let i = 0; i < 50; i++) {
        drawGrass(ctx, x, y);
        x += 70;
    }

    // call the function to draw a river
    var x = 1;
    var y = 900;
    river(ctx, x, y);

    //call the function to draw some fishes
    ctx.beginPath();
    var fish = new Image();
    fish.src = "fish.png";
    fish.onload = function () {
        ctx.drawImage(fish, 850, 1000, 100, 100);
        ctx.drawImage(fish, 700, 900, 100, 100);
    }
    ctx.closePath();



    //call the function to draw a house
    ctx.beginPath();
    var house2 = new Image();
    house2.src = "house2.png";
    house2.onload = function () {
        ctx.drawImage(house2, 850, 370);
    }

    ctx.beginPath();
    var airplane = new Image();
    airplane.src = "ap.png";
    airplane.onload = function () {
        ctx.drawImage(airplane, 1200, 100,150,125);
    }



    // call the function to draw a sun
    sun(ctx);

    //draw some bubble for the fish
    var x = 820;
    var y = 950;
    bubble(ctx,x,y);

    var x = 860;
    var y = 910;
    bubble(ctx,x,y);
    
    var x = 980;
    var y = 1050;
    bubble(ctx,x,y);

    var x = 1000;
    var y = 1030;
    bubble(ctx,x,y);



};

//function to draw grass
function drawGrass(ctx, x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 5, y - 20);
    ctx.lineTo(x + 10, y - 5);
    ctx.lineTo(x + 15, y - 25);
    ctx.lineTo(x + 20, y - 5);
    ctx.lineTo(x + 25, y - 20);
    ctx.lineTo(x + 30, y);
    ctx.closePath(0);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
}

//function to draw cloud
function drawCloud(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    ctx.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    ctx.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    ctx.moveTo(x + 200, y + 60);
    ctx.lineTo(x, y + 60);
    ctx.fillStyle = "white";
    ctx.fill();
};


//function to draw river
function river(ctx, x, y) {
    ctx.beginPath();
    ctx.fillStyle = "skyblue";
    ctx.fillRect(x, y, 3000, 4000);
};

//function to draw sun
function sun(ctx) {
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.fillStyle="red";
    ctx.fill();
};


function bubble(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
};

























