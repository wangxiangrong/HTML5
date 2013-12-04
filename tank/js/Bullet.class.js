//子弹类
function Bullet(x,y,good,direction){
	this.x = x;
	this.y = y;
	this.good = good
	this.size = 4;
	this.speed = 7;
	this.direction = direction;//子弹方向
	
	this.up = function(){
		if(this.y == 0){ }
		this.y -= this.speed;
	}
	
	this.down = function(){
		if(this.y == 0){ }
		this.y += this.speed;
	}
	
	this.left = function(){
		if(this.x == 0){ }
		this.x -= this.speed;
	}
	this.right = function(){
		if(this.x == 0){ }
		this.x += this.speed;	
	}
	
	
	
	this.draw = function(context){
		context.fillStyle = "white";//绘制子弹颜色
		if(this.direction == 8){
			context.fillRect(this.x+19,this.y,this.size,this.size);
			this.up();
		}else if(this.direction == 2){
			context.fillRect(this.x+19,this.y+40,this.size,this.size);
			this.down();
		}else if(this.direction == 4){
			context.fillRect(this.x,this.y+18,this.size,this.size);
			this.left();
		}else if(this.direction == 6){
			context.fillRect(this.x+40,this.y+18,this.size,this.size);
			this.right();
		}
		
	}
	
	
	
		//获取矩形区域对象
	this.getRect = function(){
		return new Rectangle(this.x, this.y, this.size, this.size);
	}
	
	//碰撞坏坦克
	this.hitTanks = function(tanks){
		for(var j=0; j < tanks.length; j++){
			var badTank = tanks[j]; 
			if(this.getRect().intersects(badTank.getRect())){
				tanks.remove(badTank);//移除此坦克
				bullets.remove(this);//移除此子弹
				explodes.push(new Explode(badTank.x,badTank.y));
				delete this;
				delete badTank;
			}
		}
	}






}