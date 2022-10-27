let string = "";
let string2= "";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML=="="){
      string=eval(string);
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=="Clear"){
      string = string2;
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='AC'){
      string="";
      document.querySelector('input').value=string;
    }
    else{
      string2=string;
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value=string;
    }
  });
});
