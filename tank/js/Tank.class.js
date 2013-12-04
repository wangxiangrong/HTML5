//坦克类
function Tank(good, x , y){
	this.name = 'default Tank';
	this.color = 'red';
	this.x = x;
	this.y = y;
	this.oldX = this.x;
	this.oldY = this.y;
	this.life = 10;//坦克生命
	this.size = 40;
	this.speed = 5;
	var bL = false, bU = false, bR = false, bD = false;
	this.direction = 5;//坦克方向 5代表停止
	this.ptdirection = this.direction;//子弹方向
	this.bullet;
	this.explode;
	this.image = tank_image;
	this.cutX = 60;//截取素材X坐标
	this.cutY = 0;//截取素材Y坐标
	if(!good){
		this.image = tanks_image[0];
	}
	
	//发射子弹
	this.launch = function(){
		 if(fire_audio.paused){ fire_audio.play();  }
		//this.explode = new Explode(this.x,this.y);
		bullets.push(new Bullet(this.x,this.y,true, this.ptdirection));//向子弹容器添加子弹
	}
 
	//控制方向
	this.locationDirection = function(){
		if (bL && !bU && !bR && !bD)
			this.ptdirection = this.direction = 4;
		if (!bL && bU && !bR && !bD)
			this.ptdirection = this.direction = 8;
		if (!bL && !bU && bR && !bD)
			this.ptdirection = this.direction = 6;
		if (!bL && !bU && !bR && bD)
			this.ptdirection = this.direction = 2;
		if (!bL && !bU && !bR && !bD){
			 this.direction = 5;//停止
		}
	}
	
	
	//按键事件
	this.keydown = function(event){
		var keycode = event.keyCode;
		switch (keycode) {
		case 65:
			bL = true;
			break;// 左
		case 87:
			bU = true;
			break;// 上
		case 68:
			bR = true;
			break;// 右
		case 83:
			bD = true;
			break;// 下
		case 74: 
			break;
		}
		this.locationDirection();
	}
	
	this.keyup = function(event){
		var keycode = event.keyCode;
		switch (keycode) {
		case 65:
			bL = false;
			break;
		case 87:
			bU = false;
			break;
		case 68:
			bR = false;
			break;
		case 83:
			bD = false;
			break;
		case 74:
			this.launch();
			break;// 开火
		}
		this.locationDirection();
	}
 
 	this.stay = function() {
		this.x = this.oldX;
		this.y = this.oldY;
	}
	//绘制
	this.draw = function(context){ 
 		context.drawImage(this.image,this.cutX,this.cutY,60,60, this.x,this.y,this.size,this.size);		
		this.move();
	}
	
	//移动坦克
	this.move = function(){
		this.oldX = this.x;
		this.oldY = this.y;
		switch (this.direction) {
		case 4: 
			this.cutX = 0;
			this.x -= this.speed; 
			break;
		case 8:
			this.cutX = 60;
			this.y -= this.speed;
			break;
		case 6: 
			this.cutX = 180;
			this.x += this.speed; 
			break;
		case 2: 
			this.cutX = 120;
			this.y += this.speed;
			break;
		case 5:;break;
		}
	}
	
	//碰撞水
	this.hitWater = function(water){
		if(this.getRect().intersects(water.getRect())){
			this.stay();
		}
	}
	//碰墙
	this.hitWall = function(wall){
		if(this.getRect().intersects(wall.getRect())){
			this.stay();
		}	
	}
	this.hitTank = function(tank){
		if(this.getRect().intersects(tank.getRect())){
			this.stay();
		}	
		
	}
	
	//获取矩形区域对象
	this.getRect = function(){
		return new Rectangle(this.x, this.y, this.size, this.size);
	}
	
}