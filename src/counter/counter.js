import { Component } from "react";


class Counter extends Component{
   constructor(){
       super();
       this.state ={
         countValue:0       
       }
     
       this.increaseCount = this.increaseCount.bind(this);
       this.decreaseCount = this.decreaseCount.bind(this);
   } 

   increaseCount(){
       this.setState({
           countValue : this.state.countValue+1
       })
   }
   decreaseCount(){
    this.setState({
        countValue : this.state.countValue-1
    })
}
   render(){
       return(
                    <div>
               <p>{this.state.countValue}</p>
                <button onClick={ this.increaseCount}>Count ++</button>    
                <button onClick={ this.decreaseCount}>Count --</button>    
           </div>
             
           
           
       )
   }
}

export default Counter;