import  { useEffect} from 'react'

function useTitleChanger(param){
    useEffect( ()=>{
        document.title = `Title : ${param}`
    },[param])
}

export default useTitleChanger;