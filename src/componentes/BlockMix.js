import React from "react";
import { useState } from "react";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, makeStyles, Paper, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 1
    },
    paper: {
        height: 'auto',
        width: 'auto',
        padding: '10px',
    },
    control: {
        padding: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(3)
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
        padding: '3px'
    }
}));
const BlockMix = () =>{
    const spacing = 2;
    const items =
        {
            "Products": [
              { "id": 1, "name": "ALCAPARRAS DON FIDENCIO ABRE FACIL VD 100G" },
              { "id": 2, "name": "ALCAPARRAS DON FIDENCIO NONPAREIL 65G" },
              { "id": 3, "name": "ALCAPARRAS TIO PACO 100G" },
              { "id": 1, "name": "ALCAPARRAS TIO PACO 80G" },
              { "id": 2, "name": "ALCAPARRAS TIO PACO ABRE FACIL VD 100G" },
              { "id": 3, "name": "ALCAPARRAS TIO PACO BD 1.05KG"},
              { "id": 1, "name": "ALCAPARRAS TIO PACO BD 2KG"},
              { "id": 2, "name": "ALCAPARRAS TIO PACO SACHE 80G" },
              { "id": 3, "name": "ALCAPARRAS TIO PACO VD 100G"}
            ],
            "CustomerGroups": [
              { "id": 1, "name": "ARAUJO" },
              { "id": 2, "name": "ASSAI ATACADISTA - MG" },
              { "id": 3, "name": "SUPERMERCADOS BH - MG" }
            ],
            "Customers": [
              { "id": 1, "name": "ARAUJO CONSELHEIRO LAFAIETE - LOJA 74", "customerGroup": "ARAUJO" },
              { "id": 2, "name": "ARAUJO CONTAGEM - LOJA 106", "customerGroup": "ARAUJO"  },
              { "id": 3, "name": "ARAUJO CONTORNO - LOJA 46", "customerGroup": "ARAUJO" },
              { "id": 1, "name": "ASSAI CONTAGEM - LOJA 108", "customerGroup": "ASSAI ATACADISTA - MG"  },
              { "id": 2, "name": "ASSAI CENTRO - LOJA 111", "customerGroup": "ASSAI ATACADISTA - MG"  },
              { "id": 3, "name": "ASSAI LURDES - LOJA 158", "customerGroup": "ASSAI ATACADISTA - MG"  },
              { "id": 1, "name": "BH JARDIM RIACHO - LOJA 82", "customerGroup": "SUPERMERCADOS BH - MG"  },
              { "id": 2, "name": "BH CONTAGEM - LOJA 81", "customerGroup": "SUPERMERCADOS BH - MG"  },
              { "id": 3, "name": "BH PASSOS - LOJA 80", "customerGroup": "SUPERMERCADOS BH - MG"  }
            ]
        };
    
    const blockedProducts = [
        { "id": 1, "name": "ALCAPARRAS DON FIDENCIO ABRE FACIL VD 100G","customer": "ARAUJO CONSELHEIRO LAFAIETE - LOJA 74", "customerGroup": "ARAUJO" },
        { "id": 2, "name": "ALCAPARRAS DON FIDENCIO NONPAREIL 65G","customer": "ARAUJO CONSELHEIRO LAFAIETE - LOJA 74", "customerGroup": "ARAUJO" },
        { "id": 3, "name": "ALCAPARRAS TIO PACO 100G" ,"customer": "ARAUJO CONSELHEIRO LAFAIETE - LOJA 74", "customerGroup": "ARAUJO"},
        { "id": 3, "name": "ALCAPARRAS TIO PACO 100G" ,"customer": "BH CONTAGEM - LOJA 81", "customerGroup": "SUPERMERCADOS BH - MG" },
        { "id": 3, "name": "ALCAPARRAS TIO PACO 100G" ,"customer": "ASSAI LURDES - LOJA 158", "customerGroup": "ASSAI ATACADISTA - MG"},
    ]

    const [selectedCustomerGroups, setSelectedCustomersGroups] = useState([]);
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
    const handleChangeCustomerGroup = (event) => {
        let exist = selectedCustomerGroups.find(i => i === event.target.name)
        if(exist){
            let groups = selectedCustomerGroups.filter(i => i !== event.target.name)
            setSelectedCustomersGroups(groups);
        }else{
            setSelectedCustomersGroups([...selectedCustomerGroups, event.target.name]);
        }           

        
    }
    const {Products, CustomerGroups, Customers} = items;
    const classes = useStyles();
    return (
        <>
            <Typography variant="h5" gutterBottom>Parceiro Tio Paco</Typography>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>                        
                            <Grid key={1} item>
                                <Paper className={classes.paper}>
                                    <p>Produtos:</p>
                                    <FormControl component={"fieldset"} className={classes.formControl}>
                                        <FormGroup>
                                            {Products.map((product, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    control={ 
                                                        <Checkbox 
                                                            key={index}
                                                            checked={product.blocked ?? checked}
                                                            onChange={handleChange}
                                                            inputProps={{"aria-label": 'primary checkbox'}}                                                    
                                                        />
                                                    }
                                                    label={product.name}
                                                />
                                            ))}
                                        </FormGroup>
                                    </FormControl>                                   
                                </Paper>
                            </Grid>
                            <Grid key={2} item>
                                <Paper className={classes.paper}>
                                    <p>Redes:</p>
                                    <FormControl component={"fieldset"} className={classes.formControl}>
                                        <FormGroup>
                                            {CustomerGroups.map((customerGroup, index) => (
                                                <FormControlLabel 
                                                    key={index}
                                                    control={ 
                                                        <Checkbox 
                                                            key={index}
                                                            name={customerGroup.name}    
                                                            checked={customerGroup.blocked}                                                            
                                                            onChange={handleChangeCustomerGroup}
                                                            inputProps={{"aria-label": 'primary checkbox'}}                                                    
                                                        />
                                                    }
                                                    label={customerGroup.name}
                                                />
                                            ))}
                                        </FormGroup>
                                    </FormControl>   
                                </Paper>
                            </Grid>
                            <Grid key={3} item>
                                <Paper className={classes.paper}>
                                    <p>Clientes:</p>
                                    <FormControl component={"fieldset"} className={classes.formControl}>
                                        <FormGroup>
                                            {Customers.filter(customer => selectedCustomerGroups.some(group => customer.customerGroup.includes(group))).map((customer, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    control={ 
                                                        <Checkbox 
                                                            key={index}
                                                            checked={customer.blocked}
                                                            onChange={handleChange}
                                                            inputProps={{"aria-label": 'primary checkbox'}}                                                    
                                                        />
                                                    }
                                                    label={customer.name}
                                                />
                                            ))}
                                        </FormGroup>
                                    </FormControl>   
                                </Paper>
                            </Grid>
                        
                    </Grid>
                </Grid>        
            </Grid>
            <div className={classes.bottom}>
                <Button variant='contained' color={'secondary'}>Bloquear Produtos</Button>
                <Button variant='contained' color={'primary'}>DesBloquear Produtos</Button>
            </div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Paper className={classes.paper}>
                            <b>Produtos Bloqueados:</b>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id</TableCell>
                                            <TableCell>Produto</TableCell>
                                            <TableCell>Rede</TableCell>
                                            <TableCell>PDV</TableCell>
                                        </TableRow>                                        
                                    </TableHead>
                                    <TableBody>
                                        { blockedProducts.filter((product) => selectedCustomerGroups.some(group => product.customerGroup.includes(group))).map((row, index) =>(
                                            <TableRow  key={index}>
                                                <TableCell>{row.Id}</TableCell>
                                                <TableCell>{row.name}</TableCell>
                                                <TableCell>{row.customerGroup}</TableCell>
                                                <TableCell>{row.customer}</TableCell>
                                            </TableRow>
                                        )) }                                        
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>    
                    </Grid>
                </Grid>
            
            </Grid>

            
        </>        
    )

}
export default BlockMix;