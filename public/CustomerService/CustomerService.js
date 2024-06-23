let Back = document.getElementById('back');
let header = document.getElementById('Title');
var messageCont = document.getElementById('msgBox');
let footer = document.getElementById('utils');
let container = document.getElementById('container');
let Send = document.getElementById('send');

const indentaion =100;

const url = 'https://'+window.location.hostname;
const loaderHtml =      '<div class=\"dot\" id=\"Animation1\">'+
    
                    '</div>'+
                    '<div class=\"dot\" id=\"Animation2\">'+
    
                    '</div>'+
                    '<div class=\"dot\" id=\"Animation3\">'+
    
                    '</div>';
              


    //fix need to stack from downwards

    /*if(header.offsetHeight <= container.offsetTop-message.offsetHeight-40)
    {
        container.style.top=container.offsetTop-(message.offsetHeight-40);
    }
    else
    {
        container.style.top=header.offsetHeight+'px';    
    }*/
        function assginSelection(ID)
        {
    
          const Message = {
            message:ID
          };
          const Request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Message) 
          };
          fetch(url+'/setChat', Request)
          .then(response => {
              if (!response.ok) {
               
                  throw new Error('Network response was not ok ' + response.statusText);
              }
              return response.json(); // Parse the JSON response
          })
          .then(responseData => {
            let messages = responseData.message;
            console.log(messages);
            for(let i=0;i<messages.length;i++)
              {
                let message = document.createElement("div");
                message.className="userMsg";
                message.innerHTML=messages[i].clientMessage;
                container.appendChild(message);
    
                let Aimessage = document.createElement("div");
                Aimessage.className="staffMsg";
                Aimessage.innerHTML=messages[i].response.text;
                container.appendChild(Aimessage);
              }
    
          })
          .catch(error => { 
              console.error('There was a problem with the fetch operation:', error); // Handle errors
          });
    
        }
        assginSelection('0');
        
        function SendMsg()
{
    let message = document.createElement("div");
    message.className="userMsg";
    let content ='';
    content=messageCont.value;
    if(content!="")
    {
      const Message = {
        message: content
      };
      
      
      const Request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Message)
      };
      messageCont.value="";
          let msgContent =document.createElement("label");
          //fix new line becomes space
          msgContent.innerHTML=content;
          message.appendChild(msgContent);
          container.appendChild(message);
          let loader= document.createElement("div");
          loader.className="loader";
          loader.innerHTML=loaderHtml;
          container.appendChild(loader);

      // Make the fetch request
      fetch(url+'/chat', Request)
        .then(response => {
            if (!response.ok) {
              loader.remove();
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the JSON response
        })
        .then(responseData => {
          
          //loading
          loader.remove();
          //display content
          let ResMessage = document.createElement("div");
          ResMessage.className="staffMsg";
          let ResContent =document.createElement("label");
          //fix new line becomes space
          ResContent.innerHTML=responseData.message.response.text;
          ResMessage.appendChild(ResContent);
          container.appendChild(ResMessage);
            console.log('Success:', responseData.message); 
        })
        .catch(error => {
          loader.remove();
            console.error('There was a problem with the fetch operation:', error); // Handle errors
        });
        
    }

    //fix need to stack from downwards

    /*if(header.offsetHeight <= container.offsetTop-message.offsetHeight-40)
    {
        container.style.top=container.offsetTop-(message.offsetHeight-40);
    }
    else
    {
        container.style.top=header.offsetHeight+'px';    
    }*/
}
container.style.top=header.offsetHeight+'px';
//container.style.top=footer.style.top;
container.style.height=window.innerHeight-(header.offsetHeight+footer.offsetHeight);
messageCont.style.width=(window.innerWidth-indentaion)+'px';
Back.style.height = window.getComputedStyle(header).height;
window.addEventListener('resize',()=>
{
Back.style.height = window.getComputedStyle(header).height;
messageCont.style.width=(window.innerWidth-indentaion)+'px';
container.style.height=window.innerHeight-(header.offsetHeight+footer.offsetHeight);

});
Send.addEventListener('click',()=>{
    SendMsg();
});
function insertNewLine() {
    let cursorPosition = messageCont.selectionStart;


    let textBeforeCursor = messageCont.value.substring(0, cursorPosition);
    let textAfterCursor = messageCont.value.substring(cursorPosition);


    messageCont.value = textBeforeCursor + "\n" + textAfterCursor;


    messageCont.selectionStart = messageCont.selectionEnd = cursorPosition + 1;
  }
messageCont.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && event.shiftKey) {
        
        event.preventDefault();
        insertNewLine();
        
      } else if (event.key === "Enter") {
        
        SendMsg();
      }
  });
