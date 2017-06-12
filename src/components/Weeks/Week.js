import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { data } from '../../mock-data';

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
      .then((data) => (
        this.setState({ data })
        )
      )
      .catch(err => console.log());
  }
  weekItems(category, i) {
    return (
      <div key={i}>
        <ListItem primaryText={category} />
      </div>
    );
  }
  createWeek(week, i) {
    return (
      <List key={i}>
        <Subheader>{week.title}</Subheader>
        <Divider />
        {week.categories.map(this.weekItems)}
      </List>
    );
  }
  render() {
    console.log('this.state.data', this.state.data)
    return (
      <div>
        { data.weeks.map((week, i) => this.createWeek(week, i))}
      </div>
    );
  }
}

export default Week;
