
//子弹：
class Bullet extends Base {
	
	//属性
	constructor() {
		super();
	    this.ele = null;
	}
	
	//方法
	init(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		gameEngine.allBullets.push(this);
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2+1 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	
	//移动
	move(){
		
		const that = this;
		this.timer = setInterval(()=>{
			
			if (that.ele.offsetTop < -18) {
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除子弹
				gameEngine.allBullets.splice( gameEngine.allBullets.indexOf(that), 1);
			}
			else {
				that.ele.style.top = that.ele.offsetTop - 10 + "px";
			}
		}, 30);
	}
	
	//爆炸
	boom(){
		
		//停止移动
		clearInterval(this.timer);
		
		this.ele.className = "bullet-die";	
		//爆炸动画
		let [i, that] = [0, this];
		
		let dieImgs = ["images/die1.png", "images/die2.png"];
		let dieTimer = setInterval(()=>{
			that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
			clearInterval(dieTimer);
			gameEngine.ele.removeChild(that.ele); 
		}, 100);
	}
	
}











