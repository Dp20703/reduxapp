export default reducer=(state=0,action)=>{
    if(action.type=='deposit'){
        return state+action.playload;
    }
    if(action.type=='withdraw'){
        return state-action.playload
    }
    else{
        return state;
    }
}