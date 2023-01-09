const sum = (a,b)=>{
    return a+b
}

const removeDupl = (data) =>{
    return [...new Set(data)];
}


module.exports = {
    sum,
    removeDupl
}
