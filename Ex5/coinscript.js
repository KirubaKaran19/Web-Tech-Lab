function coin(){
    var img=document.getElementById("coin");
    var head=document.getElementById("num_heads");
    var tail=document.getElementById("num_tails");
    var h=parseInt(head.innerHTML);
    var t=parseInt(tail.innerHTML);
    var l=["heads.png","tails.png"];
    var s=Math.floor(Math.random()*2);
    if(l[s]==l[0]){
        head.innerHTML=h+1;

    }
    else{
        tail.innerHTML=t+1;

    };

    img.src="images/"+l[s];
}