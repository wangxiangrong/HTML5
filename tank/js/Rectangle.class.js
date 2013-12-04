//碰撞检测类
function Rectangle(x, y, _width, _height){
	this.x = x;
	this.y = y; 
	this.width  = _width;
	this.height = _height;
	
	//碰撞检测(参数为此类)
	this.intersects = function(obj){
		var a_x_w = Math.abs((this.x+this.width/2)  - (obj.x+obj.width/2));
		var b_w_w = Math.abs((this.width+obj.width)/2);
		var a_y_h = Math.abs((this.y+this.height/2) - (obj.y+obj.height/2)); 
		var b_h_h = Math.abs((this.height+obj.height)/2);
		if( a_x_w < b_w_w && a_y_h < b_h_h ) return true;
	    else return false;
	}

}