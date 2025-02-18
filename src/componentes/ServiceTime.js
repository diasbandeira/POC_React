import React, {useState} from 'react';
import RecurrenceTableByServiceTime from "./RecurrenceTableByServiceTime";

const ServiceTime = (props) =>{
    const [closeModal, setCloseModal] = useState(false);
    const usersAround = [{
        "day": "Segunda",//Aqui fica por sua escolha. Pode ser day ou frequency
        "userId": 70870,
        "user": "Mário Luiz",
        "userWorkTime": 675,
        "serviceTime": 30,
        "availableWorkHours": -195,
        "journey": 480,
        "travelTime": 15, //tempo de deslocamento da loja a + loja b - Algoritmo vanini
        "newUserWorkTime": 720, //Tempo se incluir deslocamento + tempo de serviço + userWorkTime. 
        "origin": 'customer', //Origem do usuario pode ser: customer / user
        "customer": { //Cliente origem
            "name": 'Cliente origem',
            "id": 123
        }
    },
    {
        "day": "Segunda", //Aqui fica por sua escolha. Pode ser day ou frequency
        "userId": 70871,
        "user": "Luiz",
        "userWorkTime": 675,
        "serviceTime": 30,
        "availableWorkHours": -195,
        "journey": 480,
        "travelTime": 0, //tempo de deslocamento da loja a + loja b - Algoritmo vanini
        "newUserWorkTime": 705, //Tempo se incluir tempo de serviço + userWorkTime.
        "origin": 'user', //Origem do usuario pode ser: customer / user
        "customer": null,
    }
    ];


    let data = [
        {
            "day": "Segunda",
            "userId": 70870,
            "user": "Mário Luiz",
            "userWorkTime": 675,
            "serviceTime": 30,
            "customer": {
                "Domingo": [
                    {
                        "customer": "(G.Q.Bahia)Ele Nazaré-SAJ",
                        "customerId": 1874249,
                        "user": "Mário Luiz",
                        "userId": 70870,
                        "recurrence": {
                            "Recurrence": {
                                "Company": 681,
                                "Description": "Fluxo atendimento 17/03/2017 - Teste Suporte - Bahia",
                                "Start": "2024-05-10",
                                "End": "2039-05-10",
                                "Time": "04:55:00",
                                "Tolerance": "024:00",
                                "Standard": 2,
                                "Frequency": "1:0",
                                "Active": false,
                                "Region": 12,
                                "Id": 461729
                            },
                            "RecurrenceServiceRequest": {
                                "Id": 472230,
                                "Office": 1188,
                                "Partner": 2707,
                                "ServiceRequestType": 32063,
                                "ServiceRequestGroup": 5759,
                                "ScheduledDate": "04:55:00",
                                "LimitDate": "024:00",
                                "Observation": "",
                                "SendToDeviceNow": true,
                                "CreatedBy": 62604,
                                "ServiceRequestTypeCode": "Fluxo atendimento 17/03/2017",
                                "Users": [
                                    70870
                                ],
                                "Customers": [
                                    1874249
                                ],
                                "Fields": {}
                            }
                        },
                        "visits": 1,
                        "timeForecastOfWork": "",
                        "totalTimeWorkingTimeForecast": "",
                        "UserWorkTime": 495,
                        "Recurrence": 461729,
                        "RecurrenceServiceRequest": 472230,
                        "UserIsReallyAvailable": "yes",
                        "UserIsAvailable": 1
                    }
                ],
                "Id": 1874249,
                "Name": "(G.Q.Bahia)Ele Nazaré-SAJ",
                "Recurrence": null,
                "FrequencyByCustomer": 4,
                "IsValid": false,
                "FrequencyByWeek": 7,
                "ServiceTime": 30,
                "Segunda": [
                    {
                        "customer": "(G.Q.Bahia)Ele Nazaré-SAJ",
                        "customerId": 1874249,
                        "user": "Mário Luiz",
                        "userId": 70870,
                        "recurrence": {
                            "Recurrence": {
                                "Company": 681,
                                "Description": "Fluxo atendimento 17/03/2017 - Teste Suporte - Bahia",
                                "Start": "2024-05-10",
                                "End": "2039-05-10",
                                "Time": "04:55:00",
                                "Tolerance": "024:00",
                                "Standard": 2,
                                "Frequency": "1:1",
                                "Active": false,
                                "Region": 12,
                                "Id": 461730
                            },
                            "RecurrenceServiceRequest": {
                                "Id": 472231,
                                "Office": 1188,
                                "Partner": 2707,
                                "ServiceRequestType": 32063,
                                "ServiceRequestGroup": 5759,
                                "ScheduledDate": "04:55:00",
                                "LimitDate": "024:00",
                                "Observation": "",
                                "SendToDeviceNow": true,
                                "CreatedBy": 62604,
                                "ServiceRequestTypeCode": "Fluxo atendimento 17/03/2017",
                                "Users": [
                                    70870
                                ],
                                "Customers": [
                                    1874249
                                ],
                                "Fields": {}
                            }
                        },
                        "visits": 1,
                        "timeForecastOfWork": "",
                        "totalTimeWorkingTimeForecast": "",
                        "UserWorkTime": 675,
                        "Recurrence": 461730,
                        "RecurrenceServiceRequest": 472231,
                        "UserIsReallyAvailable": "yes",
                        "UserIsAvailable": 1
                    }
                ],
                "Terça": [
                    {
                        "customer": "(G.Q.Bahia)Ele Nazaré-SAJ",
                        "customerId": 1874249,
                        "user": "Mário Luiz",
                        "userId": 70870,
                        "recurrence": {
                            "Recurrence": {
                                "Company": 681,
                                "Description": "Fluxo atendimento 17/03/2017 - Teste Suporte - Bahia",
                                "Start": "2024-05-10",
                                "End": "2039-05-10",
                                "Time": "04:55:00",
                                "Tolerance": "024:00",
                                "Standard": 2,
                                "Frequency": "1:2",
                                "Active": false,
                                "Region": 12,
                                "Id": 461731
                            },
                            "RecurrenceServiceRequest": {
                                "Id": 472232,
                                "Office": 1188,
                                "Partner": 2707,
                                "ServiceRequestType": 32063,
                                "ServiceRequestGroup": 5759,
                                "ScheduledDate": "04:55:00",
                                "LimitDate": "024:00",
                                "Observation": "",
                                "SendToDeviceNow": true,
                                "CreatedBy": 62604,
                                "ServiceRequestTypeCode": "Fluxo atendimento 17/03/2017",
                                "Users": [
                                    70870
                                ],
                                "Customers": [
                                    1874249
                                ],
                                "Fields": {}
                            }
                        },
                        "visits": 1,
                        "timeForecastOfWork": "",
                        "totalTimeWorkingTimeForecast": "",
                        "UserWorkTime": 510,
                        "Recurrence": 461731,
                        "RecurrenceServiceRequest": 472232,
                        "UserIsReallyAvailable": "yes",
                        "UserIsAvailable": 1
                    }
                ],
                "Quarta": [
                    {
                        "customer": "(G.Q.Bahia)Ele Nazaré-SAJ",
                        "customerId": 1874249,
                        "user": "Mário Luiz",
                        "userId": 70870,
                        "recurrence": {
                            "Recurrence": {
                                "Company": 681,
                                "Description": "Fluxo atendimento 17/03/2017 - Teste Suporte - Bahia",
                                "Start": "2024-05-10",
                                "End": "2039-05-10",
                                "Time": "04:55:00",
                                "Tolerance": "024:00",
                                "Standard": 2,
                                "Frequency": "1:3",
                                "Active": false,
                                "Region": 12,
                                "Id": 461732
                            },
                            "RecurrenceServiceRequest": {
                                "Id": 472233,
                                "Office": 1188,
                                "Partner": 2707,
                                "ServiceRequestType": 32063,
                                "ServiceRequestGroup": 5759,
                                "ScheduledDate": "04:55:00",
                                "LimitDate": "024:00",
                                "Observation": "",
                                "SendToDeviceNow": true,
                                "CreatedBy": 62604,
                                "ServiceRequestTypeCode": "Fluxo atendimento 17/03/2017",
                                "Users": [
                                    70870
                                ],
                                "Customers": [
                                    1874249
                                ],
                                "Fields": {}
                            }
                        },
                        "visits": 1,
                        "timeForecastOfWork": "",
                        "totalTimeWorkingTimeForecast": "",
                        "UserWorkTime": 495,
                        "Recurrence": 461732,
                        "RecurrenceServiceRequest": 472233,
                        "UserIsReallyAvailable": "yes",
                        "UserIsAvailable": 1
                    }
                ],
                "Quinta": [
                    {
                        "customer": "(G.Q.Bahia)Ele Nazaré-SAJ",
                        "customerId": 1874249,
                        "user": "Mário Luiz",
                        "userId": 70870,
                        "recurrence": {
                            "Recurrence": {
                                "Company": 681,
                                "Description": "Fluxo atendimento 17/03/2017 - Teste Suporte - Bahia",
                                "Start": "2024-05-10",
                                "End": "2039-05-10",
                                "Time": "04:55:00",
                                "Tolerance": "024:00",
                                "Standard": 2,
                                "Frequency": "1:4",
                                "Active": false,
                                "Region": 12,
                                "Id": 461733
                            },
                            "RecurrenceServiceRequest": {
                                "Id": 472234,
                                "Office": 1188,
                                "Partner": 2707,
                                "ServiceRequestType": 32063,
                                "ServiceRequestGroup": 5759,
                                "ScheduledDate": "04:55:00",
                                "LimitDate": "024:00",
                                "Observation": "",
                                "SendToDeviceNow": true,
                                "CreatedBy": 62604,
                                "ServiceRequestTypeCode": "Fluxo atendimento 17/03/2017",
                                "Users": [
                                    70870
                                ],
                                "Customers": [
                                    1874249
                                ],
                                "Fields": {}
                            }
                        },
                        "visits": 1,
                        "timeForecastOfWork": "",
                        "totalTimeWorkingTimeForecast": "",
                        "UserWorkTime": 600,
                        "Recurrence": 461733,
                        "RecurrenceServiceRequest": 472234,
                        "UserIsReallyAvailable": "yes",
                        "UserIsAvailable": 1
                    }
                ],
                "Sexta": [
                    {
                        "customer": "(G.Q.Bahia)Ele Nazaré-SAJ",
                        "customerId": 1874249,
                        "user": "Mário Luiz",
                        "userId": 70870,
                        "recurrence": {
                            "Recurrence": {
                                "Company": 681,
                                "Description": "Fluxo atendimento 17/03/2017 - Teste Suporte - Bahia",
                                "Start": "2024-05-10",
                                "End": "2039-05-10",
                                "Time": "04:55:00",
                                "Tolerance": "024:00",
                                "Standard": 2,
                                "Frequency": "1:5",
                                "Active": false,
                                "Region": 12,
                                "Id": 461734
                            },
                            "RecurrenceServiceRequest": {
                                "Id": 472235,
                                "Office": 1188,
                                "Partner": 2707,
                                "ServiceRequestType": 32063,
                                "ServiceRequestGroup": 5759,
                                "ScheduledDate": "04:55:00",
                                "LimitDate": "024:00",
                                "Observation": "",
                                "SendToDeviceNow": true,
                                "CreatedBy": 62604,
                                "ServiceRequestTypeCode": "Fluxo atendimento 17/03/2017",
                                "Users": [
                                    70870
                                ],
                                "Customers": [
                                    1874249
                                ],
                                "Fields": {}
                            }
                        },
                        "visits": 1,
                        "timeForecastOfWork": "",
                        "totalTimeWorkingTimeForecast": "",
                        "UserWorkTime": 465,
                        "Recurrence": 461734,
                        "RecurrenceServiceRequest": 472235,
                        "UserIsReallyAvailable": "yes",
                        "UserIsAvailable": 1
                    }
                ],
                "Sabado": [
                    {
                        "customer": "(G.Q.Bahia)Ele Nazaré-SAJ",
                        "customerId": 1874249,
                        "user": "Mário Luiz",
                        "userId": 70870,
                        "recurrence": {
                            "Recurrence": {
                                "Company": 681,
                                "Description": "Fluxo atendimento 17/03/2017 - Teste Suporte - Bahia",
                                "Start": "2024-05-10",
                                "End": "2039-05-10",
                                "Time": "04:55:00",
                                "Tolerance": "024:00",
                                "Standard": 2,
                                "Frequency": "1:6",
                                "Active": false,
                                "Region": 12,
                                "Id": 461735
                            },
                            "RecurrenceServiceRequest": {
                                "Id": 472236,
                                "Office": 1188,
                                "Partner": 2707,
                                "ServiceRequestType": 32063,
                                "ServiceRequestGroup": 5759,
                                "ScheduledDate": "04:55:00",
                                "LimitDate": "024:00",
                                "Observation": "",
                                "SendToDeviceNow": true,
                                "CreatedBy": 62604,
                                "ServiceRequestTypeCode": "Fluxo atendimento 17/03/2017",
                                "Users": [
                                    70870
                                ],
                                "Customers": [
                                    1874249
                                ],
                                "Fields": {}
                            }
                        },
                        "visits": 1,
                        "timeForecastOfWork": "",
                        "totalTimeWorkingTimeForecast": "",
                        "UserWorkTime": 480,
                        "Recurrence": 461735,
                        "RecurrenceServiceRequest": 472236,
                        "UserIsReallyAvailable": "yes",
                        "UserIsAvailable": 1
                    }
                ]
            },
            "availableWorkHours": -195,
            "journey": 480
        }
    ];

    const showNearbyUsers = (usersTable, usersAround) => {
        let newData = usersTable;
        if(usersTable.length >0){
            let teste = usersTable.map((user) => {
                return usersAround.find(u => u.userId !== user.userId);                
            });
            newData = [...newData, ...teste];
        
        }
        return newData;        
    }

    data = showNearbyUsers(data, usersAround);

    console.log('data: ', data);

    const insertUsersOnRecurrence = () =>{

    }

    const handleCloseModal =() =>{
        setCloseModal(!closeModal) 
    }

    return(
        <>
            <button type="button" onClick={handleCloseModal}>
                Abrir Modal
            </button>
            <RecurrenceTableByServiceTime  data={data} closeModal={closeModal} handleCloseModal={handleCloseModal} insertUsersOnRecurrence={insertUsersOnRecurrence}/>
        </>
    )
}

export default ServiceTime;