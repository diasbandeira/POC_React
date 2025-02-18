import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {data} from '../helpers/data.js';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      //backgroundColor: 'red',
      //minWidth: '200px'
      width: '100%',
    display: 'table',
    tableLayout: 'fixed',
    },
  },
});
function RowCustomerGroup(props){
  const {index, row, openCustomers, setOpenCustomers} = props;
  return(
    <TableRow key={index}>
      <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpenCustomers(!openCustomers)}>
            {openCustomers ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
      </TableCell>
      <TableCell>{row.PARCEIRO_NOME}</TableCell>
      <TableCell align="right">{row.REDE_NOME}</TableCell>
      <TableCell align="right">{row.TOTAL}</TableCell>
    </TableRow>
  );
}
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  console.log('row customer: ', row);
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.LOJA_NOME}
        </TableCell>
        <TableCell align="right" colSpan={2}>{row.TOTAL}</TableCell>
        {/* <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Produtos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Produto</TableCell>
                    <TableCell>Total</TableCell>
                    {/* <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.PRODUCTS && row.PRODUCTS.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {historyRow.PRODUTO_DESCRICAO_INTERNO}
                      </TableCell>
                      <TableCell>{historyRow.TOTAL}</TableCell>
                      {/* <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = data;

console.log('rows: ', rows);

export default function CollapsibleTable() {
  const [openCustomers, setOpenCustomers] = useState(false);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Rede</TableCell>
            <TableCell align="right">PDV</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <RowCustomerGroup key={index} row={row} openCustomers={openCustomers} setOpenCustomers={setOpenCustomers}/>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={openCustomers} timeout="auto" unmountOnExit>
                    {row.CUSTOMERS.map((c, cIndex) => (
                      <Row key={cIndex} row={c} />              
                    ))}
                  </Collapse>
                </TableCell>
              </TableRow>             
              
            </React.Fragment>
          ))}           
        </TableBody>
      </Table>
    </TableContainer>
  );
}
