import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal2 from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      //position: 'relative',
      width: '95%',
      height: '90%',
     // backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

// const brands = [{
//         code: 'Marca1',
//     },{
//         code: 'Marca22',
//     },
//     {
//         code: 'Marca3',
//     },
//     {
//         code: 'Marca4',
//     },
//     {
//         code: 'Marca5',
//     },
//     {
//         code: 'Marca6',
//     },
//     {
//         code: 'Marca7',
//     }
// ];

const Modal = () =>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose =() =>{
        setOpen(!open);        
    }

    return (
        <>
            <div> <Link to='/'>Home</Link></div>
            <p>Modal</p>
            <div>
                <button type="button" onClick={handleClose}>
                    Abrir Modal
                </button>
                <Modal2
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={classes.paper}>
                        <p>teste</p>
                    </div>

                </Modal2>
            </div>
        </>
    );

}
export default Modal;