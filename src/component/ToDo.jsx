import { useEffect, useState } from "react"

export const ToDoApp=()=>
{
    const [open,setOpen]=useState(false)
    const [Title,setTitle]=useState("");
    const [summary,setSummary]=useState("");

    const createTask=()=>
    {
        const item=JSON.parse(sessionStorage.getItem("item"))||new Array;
        if(!Title || !summary)
        {
            alert("Please Fill The Entry!")
        }
        item.push({Title,summary});
        sessionStorage.setItem("item",JSON.stringify(item));
        setTitle("");
        setSummary("");
    }
    const deleteTask=(index)=>
    {
        const item=JSON.parse(sessionStorage.getItem("item"));
       
        item.pop(item[index]);
        sessionStorage.setItem("item",JSON.stringify(item));
        window.location.href="/";
    }
    const item=JSON.parse(sessionStorage.getItem("item"));
    console.log(item);
    return (
        
            <div className="main-div">
                <h1>My Tasks</h1>
                <h4>{item.length==0?"You have no tasks":"Your Task"}</h4>
                {
                    item.length==0?<></>:<>
                        {
                            item.map((data,index)=>(
                                <div className="my-task">
                                    <div className="task-cta">
                                    <h4>{data.Title}</h4>
                                    <svg onClick={()=>deleteTask(index)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="7" x2="20" y2="7"></line><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>
                                    </div>
                                    <p>{data.summary}</p>
                                    
                                </div>
                            ))

                            
                        }
                    </>
                }
                <button onClick={()=>setOpen(!open)} className="btn-cta1">New Task</button>
                {
                    open?<><div className="task-div">
                    <h4>New Task</h4>
                    <div className="cta">
                        
                       <label>Title</label>
                        <input value={Title} onChange={(e)=>setTitle(e.target.value)} type="text" name="" id="" />
                    </div>
                    <div className="cta">
                        <label>Summary</label>
                        <input value={summary} onChange={(e)=>setSummary(e.target.value)} type="text" name="" id="" />
                    </div>
                    <div className="btn-cta">
                    <button onClick={()=>setOpen(!open)}>Cancel</button>
                    <button onClick={createTask}>Create</button>
                    </div>
                    
                </div></>:<></>
                }
                
            </div>
        
    )
}