import React from 'react';
import './Company.css';

import Card from '../components/Card';
import axios from 'axios';

class Company extends React.Component{
    
    constructor(){
        super();
        
        this.state = {
            compayArray : []
        }
    }
    componentDidMount(){
        
        axios.get('http://localhost:4000/company')
            .then((response)=>{
            
                const data =  this.state.compayArray.concat(response.data.company)
                
                this.setState({companyArray : data});
        });
    }
    
    render(){
        
        const {companyArray} = this.state;
         
        const list = companyArray.map((v)=>{  
            return(
                <Card 
                company : {v.company}
                recruit: {v.recurit}
                rebate : {v.rebate}
                recom : {v.recommendation} 
                favorite : {v.favorite}
                key={v.id}
                />
            )
            
        });
        
        return(
            <div>
                <div className="list">
                    {list}
             </div>
        </div>
        )
    }
}

export default Company;




