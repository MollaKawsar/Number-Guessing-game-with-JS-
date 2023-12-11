let low =1;
let high=10;
let math=Math.floor(Math.random()*(high-low)+low);
let Maxattempts=3;


function userData(){
   for(let attempts=1; attempts<=Maxattempts ; attempts++){
       let correcr_ans= prompt("Enter the Number :")
       compaire(parseInt(correcr_ans))
       if(attempts< Maxattempts ){
           alert(`You've  ${Maxattempts-attempts} attempts remaining...!`)
          // console.log(math)
       }
       
   }alert(`     
            You lose the Game :(
            The correct answare is : ${math}

   `)
    
}
function compaire(correcr_ans){
    if(isNaN(correcr_ans)|| correcr_ans <1 ||  correcr_ans>10){
        alert("Please invalid Number!")
        userData()
    }else if (correcr_ans===math){
        alert(`
            You win the Game :)
            You'r inputed Number is :${correcr_ans}
            The correct answare :${math}
        `)
        return userData();
        
    }else{
        if(correcr_ans > math){
            alert(" Correct answer is greater")
        }else if(correcr_ans < math){
            alert(" Correct answer is smaller!")
        }
    } 
   
    
}
userData()