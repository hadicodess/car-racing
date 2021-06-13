canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
car1_width = 120; 
car1_height = 70;
car1_img = "car1.png" 
car1_x = 10; 
car1_y = 10; 

car2_width = 120; 
car2_height = 70;
car2_img = "car1.png" 
car2_x = 10; 
car2_y = 10; 

function add(){
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image; 

    car1_imgTag = new Image(); 
    car1_imgTag.onload = uploadcar1; 
    car1_imgTag.src = car1_image; 

    car2_imgTag = new Image(); 
    car2_imgTag.onload = uploadcar2; 
    car2_imgTag.src = car1_image; 

} 
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height); 

} 
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height); 
    
} 

window.addEventListener("keydown", my_keydown); 


function my_keydown(e) 
{
    keyPressed = e.keyCode; 
    console.log(keyPressed); 
    if(keyPressed== '38'){
        car1_up(); 
        console.log("up arrow key"); 
    }  
    if(keyPressed== '40'){
        car1_down(); 
        console.log("down arrow key"); 
    } 
    if(keyPressed== '37'){
        car1_left(); 
        console.log("left arrow key"); 
    } 
    if(keyPressed== '39'){
        car1_right(); 
        console.log("right arrow key"); 
    } 
    if(keyPressed== '87'){
        car2_up(); 
        console.log("w key"); 
    }  
    if(keyPressed== '83'){
        car2_down(); 
        console.log("s key"); 
    } 
    if(keyPressed== '65'){
        car2_left(); 
        console.log("a key"); 
    } 
    if(keyPressed== '68'){
        car2_right(); 
        console.log("d key"); 
    } 



} 
function car1_up()
{
    if(car1_y >= 0) {
    car1_y = car1_y - block_image_height;  
console.log("block image height = " + block_image_height ); 
console.log("when up arrow key is pressed, x= " + player_x + ",Y ="+ player_y);
canvas.remove(player_object); 
player_update(); 
    }
}
function car1_down()
{
    if(player_y <= 500){ 
    player_y = player_y + block_image_height;  
console.log("block image height = " + block_image_height ); 
console.log("when down arrow key is pressed, x= " + player_x + ",Y ="+ player_y);
canvas.remove(player_object); 
player_update(); 
    }
}
function car1_left()
{
    if(player_x >0) {
    player_x = player_x - block_image_width;  
console.log("block image width = " + block_image_width ); 
console.log("when left arrow key is pressed, x= " + player_x + ",Y ="+ player_y);
canvas.remove(player_object); 
player_update(); 
    }
}
function car1_right()
{
    if(player_x <= 850) {
    player_x = player_x + block_image_width;  
console.log("block image width = " + block_image_width ); 
console.log("when right arrow key is pressed, x= " + player_x + ",Y ="+ player_y);
canvas.remove(player_object); 
player_update(); 
    }
}
