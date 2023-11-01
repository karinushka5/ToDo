import React, { useState } from 'react';
import UserList from './components/UserList';
import TodoList from './components/TodoList';
import styles from './App.module.scss';
import Pagination from './components/Pagination';

const App: React.FC = () => {
  const [changePage, setChangePage] = useState<undefined | number>(1);
  console.log(changePage);
  return (
    <div className={styles.page}>
      <div className={styles.page__container}>
        <UserList changePage={changePage} />
        <TodoList changePage={changePage} />
      </div>
      <div className={styles.page__pages}>
        <Pagination changePage={changePage} setChangePage={setChangePage} />
      </div>
    </div>
  );
};
export default App;
