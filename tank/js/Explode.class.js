//爆炸类
function Explode(x, y){
	this.x = x - 15;
	this.y = y - 15;
	this.size = 70;
	this.imgxs = [0, 136, 272, 408, 544, 680, 816, 952, 1088];
	this.stepx = 0;//爆炸帧
	this.image = boom_image;
	
	//绘制
	this.draw = function(context){
		if(this.stepx == 0){//如果刚开始第一帧
			if(boom_audio.paused){ boom_audio.play();}
		}
		if(this.stepx == this.imgxs.length){//如果是最后一帧
			explodes.remove(this);//移除爆炸对象
			delete this;
		}
		context.drawImage(this.image,this.imgxs[this.stepx],0,136,107, this.x,this.y,this.size,this.size);
		this.stepx +=1;
	}
}