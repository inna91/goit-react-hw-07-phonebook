import React from 'react';
import { connect } from 'react-redux';
import s from './TotalNumber.module.css';

const TotalNumber = ({ total }) => {
  return (
    <div className={s.wrap}>
      <p className={s.number}>Number of contacts: {total}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  total: state.contacts.items.length,
});

export default connect(mapStateToProps)(TotalNumber);
