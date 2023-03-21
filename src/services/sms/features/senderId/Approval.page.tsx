/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'core/app/rootStore';

import { idsSelector, usersSelector, senderIdsList } from './store';

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const ids = useSelector(idsSelector);

  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(senderIdsList());
  }, []);

  return <>Approval Ids</>;
};

export default UsersScreen;
