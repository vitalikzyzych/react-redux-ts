/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'core/app/rootStore';

import { senderIdsList } from './store';

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(senderIdsList());
  }, []);

  return <>Approval Ids</>;
};

export default UsersScreen;
