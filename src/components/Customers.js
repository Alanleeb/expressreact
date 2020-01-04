import React, { Component } from 'react';


class Customers extends Component {
    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('Customers Fetched...', customers)))
    }

render(){
  return (
    <div>
        <h2>Customers</h2>
        <ol>
        {this.state.customers.map(customer => 
<li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          )}
      </ol>
    </div>
  )};
}

export default Customers;
