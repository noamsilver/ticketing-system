import React from 'react';
import NewTicketButton from '../../components/NewTicketButton';
import SearchBox from '../../components/SearchBox';

const Header = () => (
  <div id='header'>
    <div id='title'>Ticketing System</div>
    <SearchBox />
    <NewTicketButton />
  </div>
);

export default Header;