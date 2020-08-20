class division{
      constructor(x,y,w,h);

   isstatic=true;}
 this.body = Bodies.rectangle(x,y,w,h,options);
 this.w=w;
 this.h=h;
 World.add(world,this.body);
 for (var k=0;k<=innerWidth;k=k+80){
     division.push(new division(k,height-divisionHeight/2,10,divisionHeight));
 }

display()
    var pos = this.body.position;
    rectMode(CENTRE);
    fill("white");
    rect(pos.x,pos.y,this.w,this.h)
