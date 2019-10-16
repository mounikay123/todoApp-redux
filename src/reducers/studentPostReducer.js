
const initialState={
    studentPostData:[],
    studentName:"",
    btn:true,
    updateVal:0,
    err:''

}
export const studentPostReducer=(state=initialState,action)=>{
    switch(action.type){
        case "INP_VAL" :
                return{
                    ...state,
                    studentName: action.payload
                }
        case "UPDATE_BTN" :
                return{
                    ...state,
                    btn:false
                }
        case "STUDENT_POST" :
            console.log(action.payload,"HHHHHHHHHHHHH")
            if(action.payload===""){
                return{
                    err:true,
                    btn:true,
                    studentPostData:[]
                }
            }else{
                return{
                    ...state,
                    studentPostData:state.studentPostData.concat(action.payload),
                     err:false,
                     btn:true,
                    studentName:""
                }
            }
            
            case "STUDENT_UPDATE" :
                console.log(action.payload,action.payload1)
                    return{
                        ...state,
                        studentName:action.payload1,
                          updateVal:action.payload
 
                    }
                
                    case "STUDENT_UPDATE2" :
                       
                        var items =state.studentPostData;
                        var index=action.payload1
                        if (index !== -1) {
                            items[index] = action.payload
                           
                        }
                            return{
                                ...state,
                                studentPostData:[...items],
                                btn:true,
                                studentName:''
                            } 
                    case "STUDENT_REMOVE"  :
                        console.log(action.ind,action.val,"removeeeeeeeeee")
                            var items =state.studentPostData;
                            var  index=action.val
                            items.splice(index,1)
                            console.log(items)
              
                         return {
                            ...state,
                            studentPostData:   [...items]                  
                        }       
                        case "STUDENT_REMOVEALL"    :
                            return{
                                ...state,
                                studentPostData:[]  
                            }
            default :
            return state
    }
}