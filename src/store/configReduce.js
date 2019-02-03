function liu(state=0,action)
{
    let {type,val}=action;
    if(type==='INDEC')
    {
        return state+val
    }
    else{
        return state
    }
}
function wu(state=2,action)
{
    let{type,val}=action;
    if(type==='SADASF')
    {
        console.log(val)
        return state+val
    }
    else{
        return state;
    }
}
export default { liu,wu }