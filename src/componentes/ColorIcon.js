import React,  {useState}  from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/PersonAdd';

const tabela = [
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
    {linha: 'linha 1', item: 'item1'},
    {linha: 'linha 2', item: 'item2'},
    {linha: 'linha 3', item: 'item3'},
];



const ColorIcon = (props) =>{
    
    const myRef = React.createRef();
    const [selected, setSelected] = useState([]);
    const showInfoUsers = ( index) =>{
        console.log('index: ', index);
        const array = [];
        array.push(index);
        setSelected(array);
        
        
    }
    useState(()=> {
        
    },[selected]);

    const onScroll = ()=>{
        console.log('onScroll');

    }
    const handleScroll = (event) =>{
        console.log('handle Scroll');
        console.log('event: ', event);
    }
   
    return(
        <>
        <div style={{
                border: '3px solid black',
                // width: '400px',
                height: '100px',
                overflow: 'scroll',
            }} 
            onScroll={handleScroll}
        >
            <Table size={'medium'}>
                <TableHead >
                    <TableRow>
                        <TableCell component="th" id="labelId" scope="row" align="center" >Lojas</TableCell>
                        <TableCell component="th" id="labelId" scope="row" align="center">item</TableCell>
                    </TableRow>
                </TableHead>                                            
                    <TableBody>
                        {tabela.map((row, index) =>(
                        <TableRow key={index}>
                            <TableCell component="td" id="labelId" scope="row" padding="none" align="left" >
                            <DeleteIcon color={selected.indexOf(index) > -1 ? 'secondary' : 'disabled'} onClick={(e) => showInfoUsers(index)}/>
                            </TableCell>
                            <TableCell key={index} component="td" id="labelId" scope="row" padding="none" align="center" >
                                {row.item}
                            </TableCell>
                            
                        </TableRow>
                        ))}
                    </TableBody>
            </Table>
        </div>
         <div ref={myRef} onScroll={onScroll} >
            <p>teste</p>
         </div>
         </>
    );
}

export default ColorIcon;