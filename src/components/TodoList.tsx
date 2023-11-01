import React, { useEffect } from 'react';
import { useTypesSelector } from '../hooks/useTypesSelector';
import { useActions } from '../hooks/useActions';

type Props = {
  changePage?: number;
  setChangePage?: (newPage: number) => void;
};
const TodoList: React.FC<Props> = ({ changePage, setChangePage }: Props) => {
  const { page, loading, error, limit, todos } = useTypesSelector(
    (state) => state.todo,
  );
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(changePage || 1, limit);
    setTodoPage(changePage || 1);
  }, [changePage]);
  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}...</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
    </div>
  );
};
export default TodoList;
