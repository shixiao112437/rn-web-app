let data = {
    token:"222222222222222"
}
export default function tokenReduce(state=data,action){
    let {type,value} = action
    let res = JSON.parse(JSON.stringify(state))
    if(type=='setToken'){
        res.token = value
    }
    return res 
}