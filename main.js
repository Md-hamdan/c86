var canvas=new fabric.Canvas('myCanvas');

var block_image_width=30;
var block_image_height=30;

var player_x=10;
var player_y=10;
var player_object="";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            left:player_x,
            top:player_y
        });

        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);

        block_image_object.set({
            left:player_x,
            top:player_y
        });

        canvas.add(block_image_object);
    });
}