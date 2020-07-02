export function getSteps(){
    return ['Passo 1', 'Passo 2', 'Passo 3'];
}

export function getStepContent(step){
    switch (step) {
        case 0:
            return 'Selecione passo 1';
        case 1:
            return 'Selecione passo 2';
        case 2:
            return 'Selecione passo 3';
        default:
            return 'Passo nao encontrado.';
    }
}

