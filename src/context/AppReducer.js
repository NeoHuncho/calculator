export default (state,action) =>{
switch(action.type){
   case 'DISPLAY_NUMBER':
 const array = state.display.concat(action.payload);


   return{
           ...state,
           display:array,
           number: Number(array.join(''))
       }
    case 'ADD_TRANSACTION':
        return{
            ...state,
            transactions: [action.payload,...state.transactions]
        } 
    default:
        return state;
}
}