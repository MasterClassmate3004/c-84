canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg"

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    rover_imgTag.onload = uploadcar1;
    rover_imgTag.src = car1_image;

    car2_imgTag = new Image();
    rover_imgTag.onload = uploadcar2;
    rover_imgTag.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_width, car1_height, car1_x, car1_y);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_width, car2_height, car2_x, car2_y);
}

function keydown() {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38') 
{
       car1_up();
       console.log("up arrow key"); 
    }
    
    if (keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }

    if (keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }

    if (keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }

    if (keyPressed == '87')
    {
        car2_w();
        console.log("key w");
    }

    if (keyPressed == '66')
    {
        car2_a();
        console.log("key a");
    }

    if (keyPressed == '83')
    {
        car2_s();
        console.log("key s");
    }

    if (keyPressed == '68')
    {
        car2_d();
        console.log("key d");
    }
}