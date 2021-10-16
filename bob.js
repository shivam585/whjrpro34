class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.1,
			friction:0,
			density:0.2
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)

		this.image=loadImage("laddoo.png")

		World.add(world, this.body);


	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			imageMode(CENTER)
image(this.image,0,10,350,350)
			pop()
			
	}

}

