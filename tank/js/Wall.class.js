// 墙
function Wall(x, y){
	this.x = x;
	this.y = y;
	this.size = 40;
	
	this.image = wall_image;
	
	
	this.draw = function(context){
		context.drawImage(this.image,0,0,60,60, this.x,this.y,this.size,this.size);
	}
	
	
	//获取矩形区域对象
	this.getRect = function(){
		return new Rectangle(this.x, this.y, this.size, this.size);
	}
	
}