
canvas=new fabric.Canvas("canvas");
speed=50;
bx=0;
by=0;
hx=500;
hy=250;
b=0;
h=0;
function move_hole(){
	hx+=50*Math.floor(Math.random);
	hy+=50*Math.floor(Math.random);
	if(hx>1000){
		hx-=1000;
	}
	if(hx<0){
		hx+=1000;
	}
	if(hy>500){
		hx-=500;
	}
	if(hy<0){
		hx+=500;
	}
	if((Math.abs(bx-hx)<20)&&(Math.abs(by-hy)<20)){
		move_hole();
	}
	load_img();
}
hole_timer = setInterval(move_hole(),1500);
function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		h=Img;
		h.scaleToWidth(50);
		h.scaleToHeight(50);
		h.set({
			top:hy,
			left:hx
		});
	});
	canvas.add(h);
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		b=Img;
		b.scaleToWidth(50);
		b.scaleToHeight(50);
		b.set({
			top:by,
			left:bx
		});
	});
	canvas.add(b);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((bx==hx)&&(by==hy)){
		document.getElementById("hd3").innerHTML="YOU WON";
		document.getElementById("canvas").style.borderColor="red";
		document.getElementById("body").style.color="red";
		clearInterval(hole_timer);
	}else{
		if(keyPressed == '38')
		{
			up();
		}
		if(keyPressed == '40')
		{
			down();
		}
		if(keyPressed == '37')
		{
			left();
		}
		if(keyPressed == '39')
		{
			right();
		}
	}
	
	function up()
	{
		if(by>speed){
			by-=speed;
			canvas.remove(b);
			new_image();
		}
	}

	function down()
	{
		 if(by<500-speed){
			by+=speed;
			canvas.remove(b);
			new_image();
		 }
	}

	function left()
	{
		if(bx>speed)
		{
			bx-=speed;
			canvas.remove(b);
			new_image();		
		}
	}

	function right()
	{
		if(bx<1000-speed)
		{
			bx+=speed;
			canvas.remove(b);
			new_image();		
		}
	}
	
}

