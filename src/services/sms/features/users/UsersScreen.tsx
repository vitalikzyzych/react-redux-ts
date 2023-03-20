import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'core/app/rootStore';

import { idsSelector, usersSelector, userList } from './store';

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const ids = useSelector(idsSelector);

  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(userList());
  }, []);

  return (
    <>
      {ids?.map((id) => (
        <p key={id}>{users[id].name}</p>
      ))}
    </>
  );
};

export default UsersScreen;
