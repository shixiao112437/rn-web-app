export const setTokenAction = value => ({
    type:"setToken",
    value
})
// 异步action  返回一个对象
export const asyncSetToken = value => {
    return async (dispatch)=>{
        let res = await new Promise(resolve =>{
            setTimeout(()=>{
                resolve(44444)
            },2000)
        })
        // 通知redux修改statereact
        dispatch(setTokenAction(5555555))
    }
}