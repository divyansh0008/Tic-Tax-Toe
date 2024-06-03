let boxes=document.querySelectorAll(".box");
let body=document.querySelector("body");
let turno=true;


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
    
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turno===true){
            box.innerText="O";
            turno=false;

        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

let checkwinner=()=>{
    for (i of winpatterns){
        
        let pos1= boxes[i[0]].innerText;
        let pos2 =boxes[i[1]].innerText;
        let pos3= boxes[i[2]].innerText;
        if(pos1!="" && pos2!=""  && pos3!="" ){
            if(pos1===pos2 && pos2==pos3 && pos3==pos1){
                console.log("winner");
                winner(pos1);
            }
        }
      }
}

document.querySelector(".reset").addEventListener("click",()=>{
    for(i of boxes){
        i.innerText="";
        i.disabled= false;
        turno=true;    }
        boxes[4].style.height="150px"
        boxes[4].style.width="150px"
    
})
 const winner =(x)=>{
    // document.querySelector(".winner").style.visibility= "visible";
    // document.querySelector(".winner").innerText= `winner is ${x}`;
    console.log(boxes[4].innerText);
    boxes[4].style.height="250px"
    boxes[4].style.width="250px"
    boxes[4].innerText=`winner is ${x}`;
    
    
 }
 let change= document.querySelector(".change");
 change.addEventListener("click", ()=>{
    window. location. href = 'home.html'; // Replace 'https://www.example.com' with the URL of your desired page });
 })
