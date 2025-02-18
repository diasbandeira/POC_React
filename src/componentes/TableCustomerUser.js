import React, { useEffect } from 'react';
import { Table, Box, Paper, TableHead, TableRow, TableCell, TableBody, Icon} from '@material-ui/core';

export default function TableCustomerUser(){
    const table = [
        {
            "Domingo": [
                "ANDRE LUIZ BANDEIRA DIAS",
                "administrador"
            ],
            "Users": [
                62604,
                58475,
                75734
            ],
            "Id": 1334249,
            "Name": "Edifício Mariana",
            "Segunda": [
                "ANDRE LUIZ BANDEIRA DIAS",
                "administrador",
                "Daniel Führ"
            ]
        },
        {
            "Domingo": [
                "Falce (testefalce)"
            ],
            "Users": [
                59565,
                59425,
                62604
            ],
            "Id": 1411195,
            "Name": "Google Informática Ltda",
            "Segunda": [
                "Paulo Passos (teste.pp)",
                "ANDRE LUIZ BANDEIRA DIAS",
                "Falce (testefalce)"
            ]
        },
        {
            "Domingo": [
                "administrador"
            ],
            "Users": [
                58475,
                59425
            ],
            "Id": 1378422,
            "Name": "Cliente3",
            "Segunda": [
                "Paulo Passos (teste.pp)",
                "administrador"
            ]
        },
        {
            "Domingo": [
                "andre2 (andre2)"
            ],
            "Users": [
                72732,
                68869
            ],
            "Id": 1361015,
            "Name": "Shopping Estação",
            "Segunda": [
                "Michael Douglas",
                "andre2 (andre2)"
            ]
        },
        {
            "Name": "(G.Q.B)Art Center - M.SSA Novo",
            "Users": [],
            "Recurrence": {}
        },
        {
            "Name": "(G.Q.Bahia)Ele Nazaré-SAJ",
            "Users": [],
            "Recurrence": {}
        }
    ]

    const days =['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo']

    useEffect(() =>{
         table.map(row => {
            return  console.log(row)
         })
    }, [table])

    return(        
        <div className="ml-2 p-5 lg:w-5/6 sm:w-full md:w-full">
                <Box sx={{ width: '80%' }}>
                    <Paper sx={{ width: '80%', m: 0 }}>
                        <Table
                            sx={{ minWidth: 650 }}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                        >
                            <TableHead >
                                <TableRow>
                                    <TableCell component="th" id="labelId" scope="row" align="center" >Lojas</TableCell>
                                    {days.length > 0 && days.map(day => (
                                        <TableCell component="th" id="labelId" scope="row" align="center">{day}</TableCell>
                                    ))}                                    
                                </TableRow>
                            </TableHead>                                            
                            <TableBody>
                                {table.map((row, index) =>(
                                    <TableRow key={index}>
                                        <TableCell component="td" id="labelId" scope="row" padding="none" align="left" >
                                            {row.Name} 
                                        </TableCell>
                                        {days.length > 0 && days.map(day => (
                                            <TableCell component="td" id="labelId" scope="row" padding="none" align="center" >
                                                {!row[day] && (<Icon className="mr-5" >person_add</Icon>)}                                            
                                                {row[day] && row[day].length > 1 && (<Icon className="mr-5">supervisor_account</Icon>)}
                                                {row[day] && row[day].length === 1 && (<Icon className="mr-5">person</Icon>)}
                                                {/* {row[day] && row[day].map(user => (
                                                    <p>{user}</p>
                                                ))} */}
                                            </TableCell>
                                        ))}                                        
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>                
                    </Paper>
                </Box>
            </div>
    )
}