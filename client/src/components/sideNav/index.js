import React, {Component } from 'react';

// import API from "../../utils/API";

import "./index.css"

class SideNav extends Component {
    constructor() {
        super();
        this.state = { 
              customers: []
         }
    }



    componentDidMount () {
        // API.getName()
        // fetch("/login")
        // .then(res => res.json())
        // .then(customers => this.setState(({customers}), () => console.log("customers fetched...", customers)));
         
    }
 


    render() { 
        return ( 
            
<div>


<div className="sidemain">


<div className="mean">
    <h1>Welcome</h1>
    <ul>
    {this.state.customers.map(customer => 
        <li Key ={customer.id}> {customer.firstName} {customer.lastName}</li>

    )}
    </ul>
</div>


</div>

</div>
                

         );
    }
}
 
export default SideNav ;