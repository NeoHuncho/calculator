export default (state,action) =>{
switch(action.type){
   case 'DISPLAY_NUMBER':
 const array = state.display.concat(action.payload);
 const result= Number(array.join(''));

   return{
           ...state,
           display: array
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