
export const InpVal=(data)=>({

    type:"INP_VAL",
    payload:data

})
export const UpdateBtn=(data)=>({

    type:"UPDATE_BTN",
    payload:data

})
 export const StudentPostAction=(data)=>({

    type:"STUDENT_POST",
    payload:data

})
export const StudentUpdateAction=(v,k)=>({
    type:"STUDENT_UPDATE",
    payload1:k,
    payload:v

})

export const StudentUpdateAction2=(v,k)=>({
    type:"STUDENT_UPDATE2",
    payload1:k,
    payload:v

})
export const remove=(v,k)=>({
    type:"STUDENT_REMOVE",
     ind:k,
     val:v

})
export const removeall=()=>({
    type:"STUDENT_REMOVEALL"
    

})
    