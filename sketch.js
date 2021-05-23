var database;
var ball1, position;

function setup(){
    database = firebase.database();

    createCanvas(500,500);
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    //ref - reference, on - listener
    var ball1position = database.ref('ball/position');
    ball1position.on("value",readPosiiton);

}

function draw(){
    background("white");
        if(position!==undefine){
            if(keyDown(RIGHT_ARROW)){
                writePosition(1,0);
            }else if(keyDown(LEFT_ARROW)){
                writePosition(-1,0);
            }else if(keyDown(UP_ARROW)){
                writePosition(0,-1);
            }else if(keyDown(DOWN_ARROW)){
                writePosition(0,1);
            }
        }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x: position.x+x,
        y: position.y+y
    });
}
function readPosiiton(data){
    position = data.val();
    ball1.x = position.x;
    ball1.y = position.y;
}
