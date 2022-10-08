// function sendmsg(){
//     value1=document.getElementById("i1").value;
//     // value2=document.getElementById("i2").value;

//     //Element Creation : <li> </li>
//     element=document.createElement("li");
//     //Check and text edukanum :
//     if(value1!=""){
//         //Text Edukure
//         text1=document.createTextNode(value1);
//         //Value Append pandrom <p>hello</P>
//         element.appendchild(text1);
//         //div la append pannanum:
//         mydiv=document.getElementById("mydiv");
//         mydiv.appendchild(element);
//         element.style.color="red";
//         document.getElementById("i1").value="";
//     }

// }


var messages=document.getElementById("messages");
var textbox=document.getElementById("textbox");
var button=document.getElementById("button");
function show(){
    
    var newmessage=document.createElement("li");
    newmessage.innerHTML=textbox.value;
    messages.appendChild(newmessage);
    textbox.value=""
}

// button.addEventListener("click",function(){
//     var newmessage=document.createElement("li");
//     newmessage.innerHTML=textbox.value;
//     messages.appendChild(newmessage);
//     textbox.value=""
// })
