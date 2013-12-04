//老鬼
function Symbol(){
	this.x = 300;
	this.y = 350;
	this.size = 40;
	this.status = 1;//老鬼状态1：活着
	this.image = symbol_image;
	
	
	//绘制
	this.draw = function(context){
 		context.fillStyle="#FF0000";
		context.fillText("dsadsa",this.x,this.y);
		context.drawImage(this.image,0,0,60,60, this.x,this.y,this.size,this.size);
	}
	
	

	//获取矩形区域对象
	this.getRect = function(){
		return new Rectangle(this.x, this.y, this.size, this.size);
	}



}