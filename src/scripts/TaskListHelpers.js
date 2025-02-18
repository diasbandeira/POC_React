
const TaskListHelpers = {
    /**
     * Get Formated Date
     * @param date
     * @param time
     * @returns {string}
     */
    getFormatedDate: function (date, time = false) {
        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();
        let year = date.getFullYear().toString();
        let hours = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        let seconds = date.getSeconds().toString();

        if(day.length <= 1){
            day = `0${day}`;
        }

        if(month.length <= 1){
            month = `0${month}`;
        }

        if(isNaN(day) || isNaN(month) || isNaN(year)){
            return "Indefinido."
        }

        if(time === true){
            if(hours.length <= 1){
                hours = `0${hours}`;
            }

            if(minutes.length <= 1){
                minutes = `0${minutes}`;
            }

            if(seconds.length <= 1){
                seconds = `0${seconds}`;
            }

            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        }

        return `${day}/${month}/${year}`;
    },
    getDateEndNull: function (date, time = false) {
        let day = "1";
        let month = (date.getMonth() + 1).toString();
        let year = (date.getFullYear() + 2).toString();
        let hours = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        let seconds = date.getSeconds().toString();

        if(day.length <= 1){
            day = `0${day}`;
        }

        if(month.length <= 1){
            month = `0${month}`;
        }

        if(isNaN(day) || isNaN(month) || isNaN(year)){
            return "Indefinido."
        }

        if(time === true){
            if(hours.length <= 1){
                hours = `0${hours}`;
            }

            if(minutes.length <= 1){
                minutes = `0${minutes}`;
            }

            if(seconds.length <= 1){
                seconds = `0${seconds}`;
            }

            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        }
        return `${day}/${month}/${year}`;
       
   },

    /**
     * Get Standard
     * @param standard
     * @returns {string}
     */
    getStandard: function (standard) {
        switch (standard) {
            case 1: return "Diária";
            case 2: return "Semanal";
            case 3: return "Mensal";
            case 4: return "Anual";
            default: return "Personalizado"
        }
    },
    /**
     * Get Status
     * @param Active
     * @returns {string}
     */
    getActive: function (Active) {
        if(Active === true || Active === "true"){
            return "Ativo";
        }
        return "Inativo";
    },
    /**
     * Get Deleted
     * @param Deleted
     * @returns {string}
     */
    getDeleted: function(Deleted){
        if(Deleted === false || Deleted === "false"){
            return "Ativo";
        }
        return "Inativo";
    },
    /**
     * Get Parse Date
     * @param ParseDate
     */
    getParseDate: function (ParseDate) {
        if(ParseDate === undefined || ParseDate === null){
            return new Date();
        }
        return new Date(ParseDate);
    },
    /**
     * Get Date Interval
     * @param ScheduledDate
     * @param LimitDate
     * @returns {string}
     */
    getDateInterval: function (ScheduledDate, LimitDate) {
        const diffMileseconds = (LimitDate - ScheduledDate);
        let diffHours = Math.floor((diffMileseconds % 86400000) / 3600000);
        let diffMinutes = Math.floor(((diffMileseconds % 86400000) / 3600000) / 60000);

        let dHours = `${diffHours}`;
        let dMinutes = `${diffMinutes}`;

        if(dHours.length <= 1){
            dHours = `0${diffHours}`;
        }

        if(dMinutes.length <= 1){
            dMinutes = `0${diffMinutes}`;
        }

        return `${dHours}:${dMinutes}`;
    },
    /**
     * Get Task Status
     * @param Status
     * @returns {string}
     */
    getTaskStatus: function (Status) {
        switch (Status) {
            case 1:
            case "1": return "Ativa";
            case 8:
            case "8": return "Lida";

            case 16: return "Sincronizada";
            case "16": return "Sincronizada";
            case 2: return "Finalizada";
            case "2": return "Finalizada";
            case 4: return "Cancelada";
            case "4": return "Cancelada";
            case 32: return "Expirada";
            case "32": return "Expirada";
            case "1,8,16": return "Ativa, Lida e Sincronizada";
            case "2,4,32": return "Inativa";
            case 64: return "Pendente";
            case "64": return "Pendente";
            default: return "Indefinido";
        }
    },
    showToast: function(status, message) {
        switch (status){
            case true:
                return {
                    message     : message,
                    autoHideDuration: 10000,
                    anchorOrigin: {
                        vertical  : 'top',
                        horizontal: 'right'
                    },
                    variant: 'success'
                };
            case false:
                return {
                    message     : message,
                    autoHideDuration: 10000,
                    anchorOrigin: {
                        vertical  : 'top',
                        horizontal: 'right'
                    },
                    variant: 'error'
                };
            default:
                return {
                    message     : message,
                    autoHideDuration: 10000,
                    anchorOrigin: {
                        vertical  : 'top',
                        horizontal: 'right'
                    },
                    variant: 'warning'
                };
        }
    },
    recurrenceColumns: [
        {name: "Recorrência", selector: "Recurrence", sortable: true, hide: 'md', wrap: true, minWidth: "200px", omit: false},
        {name: "Fluxo", selector: "ServiceRequestType", sortable: true, wrap: true, minWidth: "200px"} ,
        {name: "Categoria", selector: "Category", sortable: true, wrap: true, omit: true},
        {name: "Usuários", selector: "User", sortable: true, wrap: true, minWidth: "200px"},        
        {name: "Locais", selector: "Customer", sortable: true, wrap: true, minWidth: "200px"},
        {name: "Filial", selector: "Office", sortable: true, wrap: true},
        {name: "Hora de Agendamento", selector: "ScheduledDate", sortable: true, hide: 'md', wrap: true},
        {name: "Próxima Execução", selector: "NextExecution", sortable: true, hide: 'md', wrap: true},
        {name: "Status", selector: "Active", sortable: true, wrap: true},
        {name: "Opções", selector: "Options", sortable: false, wrap: true},
    ],
    hideRecurrenceColumns: [
        {name: "Recorrência", selector: "Recurrence", sortable: true, hide: 'md', wrap: true, omit: true},
        {name: "Fluxo", selector: "ServiceRequestType", sortable: true,wrap: true, omit: true},
        {name: "Categoria", selector: "Category", sortable: true, wrap: true},
        {name: "Usuários", selector: "User", sortable: true, wrap: true},        
        {name: "Locais", selector: "Customer", sortable: true, wrap: true},
        {name: "Filial", selector: "Office", sortable: true, wrap: true},
        {name: "Hora de Agendamento", selector: "ScheduledDate", sortable: true, hide: 'md', wrap: true},
        {name: "Próxima Execução", selector: "NextExecution", sortable: true, hide: 'md', wrap: true},
        {name: "Status", selector: "Active", sortable: true, wrap: true, omit: true},
        {name: "Opções", selector: "Options", sortable: false, wrap: true},
    ],
    isNullOrUndefined: function (item){
        if(item === undefined){
            return false;
        }

        return item !== null;
    },
    hasItems: function (arrayList){
        return arrayList.length > 0;
    },
    isEmpty: function (obj){
        return Object.keys(obj).length === 0;
    },
    convrertInHours: function (time){
        let timeAbsolute = Math.abs(time);
        let hours = Math.floor(timeAbsolute / 60);
        let minutes = Math.floor(timeAbsolute % 60) ;
        let negativeSign = time < 0 ? '-' : '';

        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');

        return `${negativeSign} ${hours}:${minutes}`;
    },
    recurrenceGroupingPartnersColumns: [
        {name: "Id", selector: "Id", sortable: true, hide: 'md', maxWidth: "70px"},
        {name: "Descrição", selector: "Description", sortable: true, hide: 'md', wrap: true, minWidth: "250px", omit: false},
        {name: "Parceiro", selector: "Name", sortable: true, hide: 'md', wrap: true, minWidth: "250px", omit: false},
        {name: "Opções", selector: "Options", sortable: false, wrap: true},
    ],
    recurrenceGroupingPartnersInfoColumns: [
        {name: "Id", selector: "PartnerCode", sortable: true, hide: 'md', maxWidth: "70px"},
        {name: "Parceiro", selector: "PartnerName", sortable: true, hide: 'md', wrap: true, minWidth: "250px", omit: false},
        {name: "Lojas do Parceiro", selector: "PartnerCustomerQuantity", sortable: true, wrap: true, center: true},
        {name: "Lojas Com Usuário", selector: "PartnerCustomerWithUserQuantity", sortable: true, wrap: true, center: true},
        {name: "Lojas Sem Usuário", selector: "PartnerCustomerWithoutUserQuantity", sortable: true, wrap: true,  center: true},
        {name: "% de Alocação de Lojas ", selector: row => `${row.AllocationPercent}%`, sortable: true, sortFunction: (a, b) => {return a.AllocationPercent - b.AllocationPercent}, wrap: true,  center: true},
        {name: "Lojas Com Usuario Inativo / Indisponível", selector: "PartnerCustomerWithoutActiveUserQuantity", sortable: true, wrap: true,  center: true},
        {name: "% de Alocação de Frequência", selector: row => `${row.FrequencyPercent}%`, sortable: true, sortFunction: (a, b) => {return a.FrequencyPercent - b.FrequencyPercent}, wrap: true,  center: true},
        {name: "Editar", selector: "Options", wrap: true,  center: true},
        {name: "Status", selector: "Status", wrap: true,  center: true},        
    ],
};

export default TaskListHelpers;
