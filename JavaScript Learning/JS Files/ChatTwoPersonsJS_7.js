document.getElementById('submit').addEventListener("click",sendmsg);
function sendmsg(){
    value1=document.getElementById("i1").value;
    value2=document.getElementById("i2").value;

    //Element Creation : <li> </li>
    element=document.createElement("li");
    //Check and text edukanum :
    if(value1!=""){
        // Text Edukure
        text1=document.createTextNode(value1);
        //Value Append pandrom <p>hello</P>
        element.appendChild(text1);
        //div la append pannanum:
        mydiv=document.getElementById("mydiv");
        mydiv.appendChild(element);
        element.style.color="red";
        document.getElementById("i1").value="";
    }//PERSON -2 : 
    else if(value2!=""){
        text2=Document.createTextNode(value2);
        element.appendChild(text2);
        mydiv=document.getElementById("mydiv");
        element.style.color="blue";
        document.getElementById("i2").value="";
    }
}


// var messages=document.getElementById("messages");
// var textbox=document.getElementById("textbox");
// var button=document.getElementById("button");

// button.addEventListener("click",function(){
//     var newmessage=document.createElement("li");
//     newmessage.innerHTML=textbox.value;
//     messages.appendChild(newmessage);
//     textbox.value=""
// })
