import React from "react";
import ItemCreate from "./ItemCreate";

const fields = [
    {
        name: "Name",
        type: "text"
    }
];


const NewItem = ({props}) => {
    console.log(props);
   
    return(
        <div>
            <ItemCreate fields={fields}/>
        </div>
        
    );
}
export default NewItem;