import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} filters={props.filters} />
      <FilteredFruitList filters={props.filters} filter={props.currentFilter} fruit={props.fruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  currentFilter: 'all',
  updateFilterCallback: null,
  fruit: null,
  filters: []
}

export default FruitBasket;
