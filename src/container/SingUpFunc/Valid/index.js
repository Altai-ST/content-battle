export const required = value =>{
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthEmail = value=>{
    if(value && value.length > 30){
        return 'Max length is 30'
    }else if (!re.test(value)){
        return 'Invalid email address'
    }
    return undefined
}

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const maxLengthPass = value =>{
    if(value && value.length > 16){
        return 'Max length is 16'
    }
    if (value && value.length < 8){
        return 'Min lenght is 8'
    }
    return undefined
}

export const maxLengthName = value =>{
    if(value && value.length > 16){
        return 'Max length is 16'
    }
}