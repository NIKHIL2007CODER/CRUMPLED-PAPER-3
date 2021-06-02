class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 30
        }
        this.pointB = pointB
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }
 
    fly(){
        this.Launcher.bodyA = null;
    }
    display(){
        if (this.Launcher.bodyA){

        
        var pointA = this.Launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
class stand
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		

	}
	display()
	{
			
			var standPos=this.body.position;		

			push()
			translate(standPos.x, standPos.y);
			rectMode(CENTER)
			fill(0)
            stroke(128,28,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}