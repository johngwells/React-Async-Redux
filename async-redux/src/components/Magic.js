import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../redux/actions/index';

import MagicCard from './MagicCard';

const Magic = ({ fetchData, magic }) => {
  useEffect(() => {
    fetchData()

  }, [fetchData])

  return (
    <div>
      {
        Object.values(magic).map(magic => (
          <MagicCard key={Date.now()} magic={magic} />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    magic: state.magic
  }
}

export default connect(mapStateToProps, { fetchData })(Magic);