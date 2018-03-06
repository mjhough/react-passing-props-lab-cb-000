import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchAll();
  }

  fetchAll() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));

    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    const { filters, currentFilter, fruit } = this.state;
    return <FruitBasket filters={filters} currentFilter={currentFilter} fruit={fruit} updateFilterCallback={this.handleFilterChange.bind(this)} />;
  } 
} 

export default App;
