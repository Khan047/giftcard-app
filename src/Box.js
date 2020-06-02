import React,{Component} from 'react';
import Cards from './Cards'

class Box extends Component {
    constructor (props) {
		super(props);
		
		this.state = {
            total: 0,
            winids:[],
          		};
		
		this.getRandomArray = this.getRandomArray.bind(this);
        this.displayRes = this.displayRes.bind(this);
        this.findWinner = this.findWinner.bind(this);

    }
   
    getRandomArray(min, max){
        var A = [];
        while (max >= min) A.push(max--);
      
        A.sort(function () {
          return 0.5 - Math.random();
        });
      
        return A;
    }
    findWinner(){
        var ids = this.getRandomArray(1, 9);
        var newids =[];
        var random2 = Math.floor(Math.random() * 4) + 1;
        for (let i = 0; i < random2; i++) {
            newids.push(ids[i]);
         
        }
        console.log(newids);
        this.setState({
            winids:newids
        });
    }
    componentDidMount(){
        this.findWinner()
    }
    
    displayRes(e){
        var x = this.state.winids;
        var r = Math.floor(Math.random() * 2);
        var price = r == 1 ? 15 : 5;
        
        for(let i=0;i<this.state.winids.length;i++){
      if(x[i]==e.currentTarget.id){
        this.setState({
            total:this.state.total+price
         });
        e.currentTarget.innerHTML =`${price}$e-Gift card`;
        e.currentTarget.className = 'win';
        break;
      }
      else{
        e.currentTarget.className = 'lose';
      }
    }
        
        
    }
    render() {
        let cards= ['1','2','3','4','5','6','7','8','9'];

      return (
        <div className="main">
            <p className="text"> A chance to win a 10$ Gift card from U.S Military - You've won {this.state.total}$</p>
            <div className="grid-container">
                {cards.map((card, index)=>  <Cards  key = {card} id={card} clickFunction={this.displayRes}  />)}
            </div>
            
        </div> 
      );
    }
  }
  export default Box;