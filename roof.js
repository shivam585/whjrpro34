class roof
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
		this.image=loadImage("wreckingcrane.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			
			translate(groundPos.x, groundPos.y);

		
			
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);

			imageMode(CENTER)
			image(this.image,-100,+100,800,800)
			pop();
			
	}

}