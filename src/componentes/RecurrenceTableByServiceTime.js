import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Icon} from '@material-ui/core';
import TaskListHelpers from '../scripts/TaskListHelpers';
import Modal from 'react-awesome-modal';
const RecurrenceTableByServiceTime = (props) => {
    const {data, closeModal, handleCloseModal, insertUsersOnRecurrence } = props;
    return (
        <div>
            <Modal visible={closeModal} effect="fadeInLeft" onClickAway={() => false} className="bg-transparent">
            <div className="px-6 py-4 flex justify-between content-center items-center text-white font-bold c-header">
                <div className="empty-block"/>
                <div className="font-bold text-xl mb-2">Tempo de Atendimento </div>
                <button type="button" className="flex bg-transparent text-white font-bold rounded items-center justify-between content-center" onClick={handleCloseModal} >
                    <Icon>close</Icon>
                </button>
            </div>
                <Paper>
                    <Table size='small'>
                    <TableHead >
                        <TableRow>
                            <TableCell component="th" id="Promotor" align="center">Promotor</TableCell>
                            <TableCell component="th" id="Jornada" align="center">Jornada</TableCell>
                            <TableCell component="th" id="Alocado" align="center">Tempo Alocado</TableCell>
                            <TableCell component="th" id="Disponibilidade" align="center">Disponibilidade</TableCell>
                            <TableCell component="th" id="atendimento" align="center">Tempo de Atendimento</TableCell>
                            <TableCell component="th" id="atendimento" align="center">Tempo de Deslocamento</TableCell>
                            <TableCell component="th" id="atendimento" align="center">Novo Tempo de Serviço</TableCell>
                            <TableCell component="th" id="atendimento" align="center">Origem do Promotor</TableCell>
                            <TableCell component="th" id="atendimento" align="center">Nome PDV Origem</TableCell>
                            <TableCell component="th" id="atendimento" align="center">Selecionar</TableCell>
                            <TableCell component="th" id="atendimento" align="center">Obs</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {data && data.map((row, index) =>( 
                                <TableRow key={index}>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        {row.user}
                                    </TableCell>                                     
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        {row.journey ? TaskListHelpers.convrertInHours(row.journey) : '-' }
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        {row.userWorkTime ? TaskListHelpers.convrertInHours(row.userWorkTime) : '-' }
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        {row.availableWorkHours ? TaskListHelpers.convrertInHours(row.availableWorkHours) : '-'}
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        {row.serviceTime ? TaskListHelpers.convrertInHours(row.serviceTime) : '-'}
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        {row.travelTime === undefined ? '-' : TaskListHelpers.convrertInHours(row.travelTime) }
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        {row.newUserWorkTime ? TaskListHelpers.convrertInHours(row.newUserWorkTime) : '-' }
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                    {row.origin === 'user' ?  'User' : row.origin === 'customer' ? 'Customer' : '-' }
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                    {row.customer?.name ?? '-' }
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        <Icon
                                            onClick={() => {
                                                insertUsersOnRecurrence( {label: row.user, value: row.userId}, row.customer, row.day, undefined , { "label": "Pesquisar...",  "value": 0});
                                                handleCloseModal();
                                             } } 
                                        >
                                                thumb_up_icon
                                        </Icon>
                                    </TableCell>
                                    <TableCell component="th" align="center" scope="row" padding="checkbox">
                                        {row.observations === undefined ? '' : "*" }
                                    </TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <p>* - Não existem recorrências para este usuário neste dia</p>
                </Paper>
            </Modal>
        </div>        
    );
}
export default RecurrenceTableByServiceTime;