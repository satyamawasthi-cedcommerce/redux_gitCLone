// Action creater
export const displayProfile = (userDetail) =>{
    return{
        type:"DISPLAY_USER",
        payload:userDetail
    }
}