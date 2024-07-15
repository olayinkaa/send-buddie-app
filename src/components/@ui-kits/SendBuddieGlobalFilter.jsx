import {useState} from "react";
import { useAsyncDebounce } from "react-table";

function SendBuddieGlobalFilter({ filter, setFilter }) {
    const [value, setValue] = useState(filter);
    const onChange = useAsyncDebounce(prev=>{
        setFilter(prev || undefined)
    }, 1000)
    return (
        <div className="flex flex-col w-3/12">
            <span>Search:</span>
            <input type="text" value={value || ""} onChange={(e) =>{
                 setValue(e.target.value)
                 onChange(e.target.value)
            }} />
        </div>
    );
}

export default SendBuddieGlobalFilter;
