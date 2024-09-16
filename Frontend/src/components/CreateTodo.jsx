import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return(
        <div>
            <input style={{padding: 10,margin: 10}}
            type="text" placeholder="Title" 
            onChange={(event)=>{setTitle(event.target.value)}} /> <br />
            <input style={{padding: 10,margin: 10}}
            type="text" placeholder="Description"
            onChange={(event)=>{setDescription(event.target.value)}} /> <br />
            <button onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                .then(()=>{
                    alert("Todo Added!")
                })
            }}>Add todo</button>
        </div>
    )
}
