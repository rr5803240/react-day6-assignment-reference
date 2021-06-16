
import { useState , useEffect} from 'react'
import axios from 'axios'

function FCounter(){
    const intialValue  =0;
    const [countValue,setCountValue] = useState(intialValue);
    const [news,setNews] = useState([]);
    const [productList,setproductList] = useState([]);
    const [numbers,setNumbers] = useState([]);

    // CDM , CDU
    useEffect(()=>{
        axios('https://newsapi.org/v2/top-headlines?country=in&apiKey=50a1b9eb90fd42e9ba369f99dfb59c71')
        .then( response=>{
           console.log(response.data.articles);
           setNews(response.data.articles);
        }).catch( err =>{
            console.log(err)
        })
    },[]); // this fixes your es list 

    const addTwo =()=>{
        for (let index = 0; index < 2; index++) {
            setCountValue(prevCount => prevCount + 1) 
        }
    }

    const addNumber = ()=>{
        setNumbers([...numbers,{
            id:numbers.length,
            value: Math.floor(Math.random() *10 )+ 1
        }])   
    }
    return(
        
        <div>
            {/* <p>{countValue}</p> */}
             {/* <button onClick={() =>setCountValue(intialValue)}>reset</button>    
             <button onClick={() =>setCountValue(countValue+1)}>Count +1</button>    
             <button onClick={() =>setCountValue(countValue-1)}>Count -1</button>    
             <button onClick={addTwo}>Count +2</button>     */}
             {}
             {
                 news.map( (record, index)=>(
                     <li key={index}>{record.title}</li>
                 ))
             }
           
        </div>
    )
        
}
export default FCounter;



