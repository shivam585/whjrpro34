class block
{
	constructor(x,y,w,h,f,c)
	{
		var options={
			isStatic:f			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
	//	this.image=loadImage("wreckingcrane.png")
    this.color=(random(0,255))
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			
			translate(groundPos.x, groundPos.y);
fill(this.color)
		
			
			rectMode(CENTER)
			strokeWeight(4);
            stroke("brown")
			fill("black")
			rect(0,0,this.w, this.h);

			//imageMode(CENTER)
			//image(this.image,-100,+100,800,800)
			pop();
			
	}

}