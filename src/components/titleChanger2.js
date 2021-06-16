import {useState} from 'react'

import   useTitleChanger from '../hooks/useTitleChanger.js'

function TitleChanger2(){
    const [title,setTitle] = useState(0);

    useTitleChanger(title)
    return(
        <div><button onClick={()=> setTitle(title + 1 )}>Change Title</button></div>
    )
}

export default TitleChanger2;