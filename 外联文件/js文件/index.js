var sr=new Array('../外联文件/图片/lunbo1.jpg','../外联文件/图片/lunbo2.jpg','../外联文件/图片/lunbo3.jpeg');
var a=1;
var img1=document.getElementById('tu');
var anniu=document.getElementsByTagName('input');
var mark=1;
window.onload=function () {
    lunbo();
};
function lunbo() {
    lunbotu=setInterval(function(){
        if(mark==1);
        else {if(a==2)a=0;else a++;}
        img1.src=sr[a];
        for(var b=0;b<3;b++)
        {   if(b==a)anniu[b].style.opacity=1;
        else anniu[b].style.opacity=0.3;
        }
        if(a<2)a++;
        else a=0;
        mark=1;
    },2000);
}
function stop() {
    clearInterval(lunbotu);
}
function leftbo() {
    if(mark==1){if(a==2)a-=2;else a++;}
    else {if(a==0)a=2;else a--;}
    img1.src=sr[a];
    for(var b=0;b<3;b++)
    {   if(b==a)anniu[b].style.opacity=1;
    else anniu[b].style.opacity=0.3;
    }
    mark=0;
}
function rightbo() {
    if(mark==1);
    else {if(a==2)a=0;else a++;}
    img1.src=sr[a];
    for(var b=0;b<3;b++)
    {   if(b==a)anniu[b].style.opacity=1;
    else anniu[b].style.opacity=0.3;
    }
    mark=0;
}