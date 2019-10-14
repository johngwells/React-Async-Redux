import React, { useEffect } from 'react';
import { fetchData } from '../redux/actions';

const Magic = () => {
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div>
      <h1>Magic Data</h1>
    </div>
  );
}

export default Magic;