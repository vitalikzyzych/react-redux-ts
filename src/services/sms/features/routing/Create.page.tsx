/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'core/app/rootStore';

import { routingList } from './store';

const NewRoutingPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(senderIdsList());
  }, []);

  return <>Create Route</>;
};

export default NewRoutingPage;
