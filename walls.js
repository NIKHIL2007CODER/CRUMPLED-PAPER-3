class walls
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
 		World.add(world, this.body);

	}
	display()
	{
			
			var wallPos=this.body.position;		

			push()
			translate(wallPos.x, wallPos.y);
			rectMode(CENTER)
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}