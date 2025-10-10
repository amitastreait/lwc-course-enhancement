export function add(a, b){
    return Number(a) + Number(b);
}

export function reduceError(error){
    let errorMessage = 'Unknon Error';
    if(error && error.body.message){
        errorMessage = error.body.message;
    }
    return errorMessage;
}

export function callApex(component, methodName, params, options = {}){

}