import SearchIcon from '../icons/search-icon';

import './search-button.scss';

const SearchButton = () => {
  return (
    <button className="search-button">
      <SearchIcon />
      Search
    </button>
  );
};

export default SearchButton;
