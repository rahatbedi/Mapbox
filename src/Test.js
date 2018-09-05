import React, { Component } from 'react';

function ListItem(props) { 
  const cities = props.cities.map(function (city , index){
      return <li key={index}>{city}</li> ;
  });
  return (
    <ul> {cities} </ul> 
  );
}

class CityList extends Component {
  constructor (props){
    super(props);
    this.state = {cities: [] , city: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({city: event.target.value});
  }
 
  handleSubmit(event){
    event.preventDefault();
    let cities = this.state.cities;
    cities.push(this.state.city);
    this.setState({
      cities: cities,
      city: ''
    });
  }
 

  render() {
    return (
    <div>
      <form onSubmit = {this.handleSubmit} >
        Name:
        <input type = "text" name= "city" value ={this.state.city} onChange = {this.handleChange}/>
        <input type = "submit" />
      </form>
      <ListItem cities = {this.state.cities}/>
    </div>
    );
  }
}
  
export default CityList ;
