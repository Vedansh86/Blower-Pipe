class BlowerMouth{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;
        World.add(world,this.body);
    }
    show(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop()
    }
}