import React from 'react';
import Autocomplete from 'react-autocomplete';
import { useState } from 'react';


const AutomaticallyComplete = () => {
    
    const items = ['maçã', 'pera', 'uva', 'laranja'];
    const [value, setValue] = useState("");
    
    function getItemValue(item){
        return `${item.value} - ${item.label}`;
    }
    function renderItem(item, isHighlighted){
        return (
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
            </div>   
        ); 
    }
    function onChange(e){
        setValue({
            value: e.target.value
        });

        /**
         * Handle the remote request with the current text !
         */
        //this.retrieveDataAsynchronously(e.target.value);

        console.log("The Input Text has changed to ", e.target.value);
    }
    function onSelect(val){
        setValue({
            value: val
        });

        console.log("Option from 'database' selected : ", val);
    }
    return( 
        <div>
            <Autocomplete 
                getItemValue={getItemValue}
                items={items}
                renderItem={renderItem}
                value={value}
                onChange={e => onChange(e)}
                onSelect={e => onSelect(e)}
            />

        

        </div>
        
    );

}
export default AutomaticallyComplete;