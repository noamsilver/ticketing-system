import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { ReactComponent as X } from '../../assets/images/clear-x.svg';

const SearchBox = ({ value, onChange }) => {
  return (
    <div id='search-box'>
      <input
        className='search-input'
        name='search'
        type='text'
        onChange={e => onChange(e.target.value)}
        value={value}
        placeholder='Ticket search'
      />
      <X
        width={15}
        height={15}
        onClick={() => {
          onChange('');
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.searchValue,
})

const mapDispatchToProps = dispatch => ({
  onChange: text => {
    dispatch(actions.searchChange(text));
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);