import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
// import { data } from '../../mock-data';

class Week extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount(){
    fetch('http://localhost:3001/api/weeks')
      .then(response => response.json())
      .then((weeks) => this.setState({ data: weeks }))
      .catch(err => console.log(err));
  }
  weekItems(category, i) {
    return (
      <div key={i}>
        <ListItem primaryText={category.title} />
      </div>
    );
  }
  createWeek(week, i) {
    return (
      <List key={i}>
        <Subheader>{week.title}</Subheader>
        <Divider />
        {week.lessons.map(this.weekItems)}
      </List>
    );
  }
  render() {
    console.log('this.state.data', this.state.data);
    return (
      <div>
        { this.state.data.map((week, i) => this.createWeek(week, i))}
      </div>
    );
  }
}

export default Week;
