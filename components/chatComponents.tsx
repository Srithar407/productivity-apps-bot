"use client"
import { useChat, Message} from "ai/react"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
export default function ChatComponent() {
    const {input,handleInputChange,handleSubmit,messages} = useChat();
    return (
        <div>
            <div>
                {messages.map((message : Message) => {
                    return (
                        <div key={message.id} className="flex">
                            {
                                message.role === "assistant" ?
                                <FontAwesomeIcon icon={faRobot} className="pr-4 mb-4 pt-1" />
                                :
                                <FontAwesomeIcon icon={faUser} className="pr-4 mb-4 pt-1" />
                            }
                            <div className="mb-12">
                            {
                                message.content.split("\n").map((currentTextBlock : String , index : number) =>{
                                    var element = document.getElementById("textin")
                                    element?.focus();
                                    if(currentTextBlock === ""){
                                        return (
                                            <p key={message.id + index}>&nbsp;</p>
                                        )
                                    }
                                    else{
                                        return (
                                            <p key={message.id + index} id="textin" dir="ltr">{currentTextBlock}</p>
                                        )
                                    }
                                })
                            }
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            <form className="mt-16 fixed bottom-2 pl-1" onSubmit={handleSubmit}> 
                <input type="text" className="w-[600px] p-2 rounded-md border-2 mr-2 text-black" placeholder="ask something about cybersecurity ?" 
                value={input}
                onChange={handleInputChange}/>
                <button className="rounded-md bg-blue-800 p-2 mt-2 w-36">send</button>
            </form>
        </div>
    )
}