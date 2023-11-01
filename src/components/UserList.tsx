import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTypesSelector } from '../hooks/useTypesSelector';
import { fetchUsers } from '../store/action-creators/user';
import { useActions } from '../hooks/useActions';
import { fetchTodos } from '../store/action-creators/todo';

type Props = {
  changePage?: number;
};
const UserList: React.FC<Props> = ({ changePage }: Props) => {
  const { users, loading, error } = useTypesSelector((state) => state.user);
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, [fetchTodos]);
  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}...</h1>;
  }
  console.log(changePage, 'ccc');
  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: changePage === user.id ? '2px solid green' : 'none',
            padding: 10,
          }}
        >
          {user.id}-{user.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
