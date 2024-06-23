const CharacterAI = require("node_characterai");
const characterAI = new CharacterAI();
const ApiKey = 'l_PaOccMEj1uORlBIDePofv2HkdUh52evl0Hk3vw3EQ';
class message{
    constructor(message,response)
    {
        this.clientMessage=message;
        this.response=response;
    }
}
class chat {
    constructor(ID)
    {
        this.id=ID;
        this.messages=[
        ];
        this.initalized=false;
        this.chat=null;
        this.context='context'+ID;
        
    }
}
class customer
{
constructor(ID)
{
    this.customerID=ID;
    this.activeChat=0;
    this.chats = [
        new chat('0'),
        new chat('1'),
        new chat('2')
    ];
}
}
let customers =[new customer('0')];
let authentication=false;
class Chatter {
    
    constructor(app)
    {
         
        
        this.app=app;
        
        

       
        
        async function generateResponse(prompt, chatObj, currentMessage) {
            try {
                if(authentication==false)
                    {
                        await characterAI.authenticateWithToken('0aaac5908dfce03ce525e6bff1d4e70a956ac803');
                        authentication=true;
                    }
                if(chatObj.chat==null)
                    chatObj.chat = await characterAI.createOrContinueChat(ApiKey);
               
                const response = await chatObj.chat.sendAndAwaitResponse(prompt, true);
                console.log('Ai : ', response);
                chatObj.messages.push(new message(currentMessage,response));
            } catch (error) {
                console.error("Error generating response:", error);
            }
        }
        this.app.post('/chat',async (req,res)=>{
            let requestingCustomer = customers[0];
            let Message = req.body.message;
            let ref = requestingCustomer.chats[requestingCustomer.activeChat].messages.length;
            console.log('Client message: ',Message);
            await generateResponse(Message,requestingCustomer.chats[requestingCustomer.activeChat],Message);
            if(requestingCustomer.chats[requestingCustomer.activeChat].messages.length>ref)
                {
            res.status(200).json({
                message: requestingCustomer.chats[requestingCustomer.activeChat].messages[ref]
            });
            }else {
                res.status(408).json({
                    message: 'Failed to generate response'
            });
        }
        });
        this.app.post('/createChat',async (req,res)=>{
            let requestingCustomer=customers[0];
            let NewChat = new chat(requestingCustomer.chats.length.toString());
            requestingCustomer.chats.push(NewChat);
            NewChat.updateDataBase(requestingCustomer.customerID,req,res);

        });
        this.app.post('/setChat',async (req,res)=>{
            let requestingCustomer=customers[0];
            let Message = req.body.message;
            let done=false;
            let Index=null;
            for(let i=0;i<requestingCustomer.chats.length;i++)
            {
                if(requestingCustomer.chats[i].id==Message)
                    {
                        Index=i;
                        done=true;
                        break;
                    }
            }
            if(done==false)
            {
                console.log('failed ',Message);
                res.status(400).json({
                    message: 'Chat doesn\'t exist'
            });
            }else{
                
                requestingCustomer.activeChat=parseInt(Message);
                if(requestingCustomer.chats[requestingCustomer.activeChat].messages!=undefined)
                    {
                res.status(200).json({
                    message:requestingCustomer.chats[requestingCustomer.activeChat].messages
                });
            }else
            {
                res.status(200); 
            }
            }
        });
        this.app.post('/getChats',async (req,res)=>{
            let requestingCustomer=customers[0];
            let activeChat=requestingCustomer.activeChat;
            let Chats=[];
            for(let i=0;i<requestingCustomer.chats.length;i++)
                {
                    Chats.push({id:requestingCustomer.chats[i].id, context:requestingCustomer.chats[i].context});
                }
                let responseObject= {
                    activeChat:activeChat,
                    Chats:Chats
                }
                res.status(200).json(responseObject);
        });   
    }

}
module.exports = Chatter;

