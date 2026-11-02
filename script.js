let count=0;
const c=document.getElementById("count");
function increase(){
    count++;
    c.innerText=count;
}
function decreases(){
    count--;
    c.innerText=count;
}
function resetcount(){
    count=0;
    c.innerText=count;
}
