/*  定义常量 */
var width  = 650;//显示区域宽度
var height = 400;//显示区域高度
var loopTime = 40;//绘制时间间隔
var canvas   = document.getElementById('myCanvas');
var context  = canvas.getContext('2d');

var fire_audio = document.getElementById('audio');

//爆炸音效
boom_audio =  new Audio();
boom_audio.src = "audio/boom.wav";
start_audio = new Audio();
start_audio.src = "audio/start.wav";
 