// // let random_color= function(event){
// //     let r=Math.floor(Math.random()*255);
// //     let g=Math.floor(Math.random()*255);
// //     let b=Math.floor(Math.random()*255);
// //     let color=`rgb(${r},${g},${b})`;
// //     event.target.style.backgroundColor=color;
// //     // console.log(event.target);
// //     // return color;
// // }


// let div1=document.querySelector('.inner1');
// let div2=document.querySelector('.inner2');
// let div3=document.querySelector('.inner3');
// let div4=document.querySelector('.inner4');


// let get_color=function(){

//     let choose;

//     let num=Math.floor(Math.random()*4)+1
//     if(num==1) choose=div1;
// else if(num==2) choose=div2;
// else if(num==3) choose=div3;
// else choose=div4;
// return choose;

// }



// let button= document.querySelector('div');
// let list =button.children

// // let common=document.querySelectorAll('#box')
// // console.log(common);
// // common.addEventListener('click',function(){
// //     console.log("clicked on list");
// // })





// // for(ele of list) console.log(ele);

// // **********************

// let i=0;
// // let comp=1;
// // let human=0;
// let crr=[];

// // let hrr=[];

// // let flag=1;

// let arr=[];
// let flag=0;
// let n=10;

// // for(let i=0;i<n;i++){

// let count=0;
// ss
// const outerloop=setInterval(fun,10000);


// function fun(){
       
//     console.log(' outer loop is running')

//     // for(let j=0;j<=arr.length;j++){

//         let  add_color=get_color();
//         add_color.classList.add("glow");
//         arr.push(add_color.id);

//         // console.log("arr",arr)

//     console.log("user now start clicking");
// let j=0;

//     let inner_loop=setInterval(function(){

//         console.log("inner loop is running")

//         // for(let ele of list){
//         // console.log(list.children)
           

//                 for(ele of list){
//                     ele.addEventListener('click',function(){
//                         // console.log("inner div was clicked");
//                         inner_info=this.id;
                       
//                         // console.log(this);
//                         // console.log(inner_info);
//                         let choose_color=ele.id;

//         console.log("user clicked")
//     console.log("choose color and arr[j]",choose_color,arr[j])

//         if(choose_color!=arr[j]) {
//             console.log("game over in inner loop");
//             clearInterval(inner_loop);

//             flag=1;
//         }


//         j++;
    
//                     })
//                 }

//     // }**

//     },3000)

// // // }**


// //     if(flag){ setTimeout(() => {
// //         console.log("game over")
        
// //     }, (10000));
// // }


// if(flag) {
//     console.log("game over in outer loop" );
//     stop_outerloop();
// }
// console.log("arr is:",arr);

// }

// function stop_outerloop(){
// clearInterval(outerloop);
// }
 



// // ******************************



// // for(ele of list){


// //     ele.addEventListener('click',function(){

// //         // while(true){

// //             if(flag){

// //                 let choose=get_color();
// //                 choose.classList.add("glow")
// //                 crr.push(choose);
// //                 flag=0;
// //                 console.log("computer")
// //             }
// //             else{
               
// //                 let len=crr.length;
// //                 let j=0;
// //                 flag=1;

// //                 while(j<len){
// //                     let human_choose=get_color();
// //                     if(arr[j]!=human_choose){
// //                         console.log("game over");
// //                         flag=0;
// //                         break;
// //                     }
// //                     // else flag=1;
// //                 }

// //             }
            
            



                
//             // }

//             // else {

// //                 console.log("human");
        
// //                 for(ele of list){
// //                     ele.addEventListener('click',function(){
// //         hrr.push(this.id);
// //                     })
// //                 }
        
// //                 if(hrr!=crr){
// //                     break;
        
// //                 }
        
        
// //             }
        
// //             i++;
// //             console.log("loop end")
// //             console.log("crr : ",crr)
// //             console.log("hrr",hrr);
        
// //         // }
    

// //     })
   
// // }






// // 
// // // console.dir(button)
// // 
// // let arr=[]
// // let score=0;
// // function right_predict(){
// //     if(arr==entered) return true;
// //     else return false;
// // }
// // let entered=choose;

// // for(let ele of list)
// // ele.addEventListener('click',function(){
// //     console.log(this.id)
// //     // arr.push(this.id)
// //     score++;

// //     if(arr.length==1){
// //         let next_div=get_color();
// //         console.log("next div id",next_div.id);
// //         next_div.classList.add("glow");
// //         // next_div.classList.remove("glow")
// //         arr.push(next_div.id)

// //     }

// //     else if(true){
// //         let next_div=get_color();
// //         console.log("next div id",next_div.id);
// //         next_div.classList.add("glow");
// //         // next_div.classList.remove("glow")
// //         arr.push(next_div.id)
// //     }

// //     else{

// //         console.log("game over over heighest score is : "+score)
// //     }


// //     console.log("arr is : "+arr)
// // })




// // let user_entry=[];
// // for(let id2 of list){
// //     id2.addEventListener('click',function(){
// //         user_entry.push(this.id);
// //         console.log("user",user_entry);
// //     })
   
// // }




// // console.log(arr.length)
// // console.log(list)
// // for(let inner of list){
// //     // console.log(inner)
// //     inner.addEventListener('click',fu)
// // }
// // button.addEventListener('click',function(){

// //     // console.log(`${this} was clicked`);
// //     console.dir(this.childNodes);

// // })



// // div1.addEventListener('click',random_color);
// // div2.addEventListener('click',random_color);
// // div3.addEventListener('click',random_color);
// // div4.addEventListener('click',random_color);

// console.log(this)
// let btn=this.BUTTON;

// const readLine=require('readLine');
// let btn=this.Keyboard

// let key=readLine("enter any key");
// console.log(key+"was pressed");


// btn.addEventLister('keydown',function(){
//     console.log("key was pressed");
// })

// const readline=require('readline');

// const rl=readline.createInterface({
//     output:process.stdout,
//     input:process.stdin
// })
// rl.question("enter your name",(name)=>{
// console.log("your name is ",name);
// if(name=="pilla") alert(name)
// })
let gameSeq=[];
let userSeq=[];
let maxi=0;


const sound =new Audio('click.mp3')
const game_over=new Audio('game_over.wav')
// const level_complete= new Audio('level_complete.wav');


let h3=document.querySelector('h3');
h3.append(maxi);

let colors=['green','blue',"red","yellow"];

let level=0;
let started=false;

   let h2=document.querySelector('h2');



  function game_flash(btn){
   btn.classList.add("flash");


   setTimeout(() => {
    btn.classList.remove("flash");
   }, 300);

   }

  function user_flash(btn){
   btn.classList.add("user_flash");
//    sound.play();



   setTimeout(() => {
    btn.classList.remove("user_flash");
   }, 250);

   }

   function levelup(){
    level++;
    // maxi=Math.max(maxi,level);
    userSeq=[];

    h2.innerHTML=`Level: ${level}`;

    let rand_id=Math.floor(Math.random()*4);
    let rand_color=colors[rand_id];
    gameSeq.push(rand_color);
    let btn=document.querySelector(`.${rand_color}`);

    console.log(rand_id,rand_color)
    game_flash(btn);
    console.log(gameSeq);
  
   }

function check_ans(idx){

    // console.log("curr level : ",level);

    if(gameSeq[idx]===userSeq[idx]){

        if(userSeq.length==gameSeq.length){
        // levelup(); 
        setTimeout(levelup, 1000);
        }
        // console.log("same value")
    }
    

    else{

        maxi=Math.max(maxi,level);
        h3.innerHTML=`Over All Highest Score: ${maxi}`
        game_over.play();

        h2.innerHTML=`game Over! your highest score is ${level}<br> press any key to start`;
let body=document.querySelector('body');
body.style.backgroundColor='red';
setTimeout(() => {

    body.style.backgroundColor='white';
}, (300));
    
            gameSeq=[];
            
            level=0;
            userSeq=[];
            started=false;
      
    }
}


   let all_btns=document.querySelectorAll('.btn');
   let start_btn=document.querySelector('.start');

   
   for(let btn of all_btns){
       btn.addEventListener("click",button_clicked)

   }

   start_btn.addEventListener('click',function(){
    
    if(started==false){
        // sound.play();
         started=true;
         levelup();
    }
   })

document.addEventListener("keydown",function(event){
   
    if(started==false){
        // sound.play();
         started=true;
         levelup();
    }
})

function button_clicked(){
    // level_complete.play();
    sound.play();

  
    // console.log("button was clicked");
    // console.log(this)
    user_flash(this);
    let color=this.getAttribute("id");
    userSeq.push(color);
 //    console.log(userSeq)
    check_ans(userSeq.length-1)
}

