

const getLocalStor=()=>{
    const getData=localStorage.getItem('card')
    if(getData){
        return JSON.parse(getData)
    }
    return []

}
 
const saveLocalStor=id=>{
    const getcardId=getLocalStor()
    const exists=getcardId.find(cardid=>cardid=== id)
    if(!exists){
        getcardId.push(id)
        localStorage.setItem('card', JSON.stringify(getcardId))
         
        
    }

    
    
}

export{getLocalStor,saveLocalStor}