import React, { Dispatch } from 'react';
import { UserAction, UserActionTypes } from '../../types/user';
import axios from 'axios';
import { TodoAction, TodoActionTypes } from '../../types/todo';
// https://jsonplaceholder.typicode.com/users
export const fetchTodos = (page = 1, limit = 5): any => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: { _page: page, _limit: limit },
        },
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};
export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
};
