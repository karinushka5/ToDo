import React, { useEffect } from 'react';
import { useTypesSelector } from '../hooks/useTypesSelector';
import { useActions } from '../hooks/useActions';

type Props = {
  changePage?: number;
  setChangePage?: (newPage: number) => void;
};
const Pagination: React.FC<Props> = ({ changePage, setChangePage }: Props) => {
  const { page } = useTypesSelector((state) => state.todo);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        {pages.map((p) => (
          <div
            onClick={() => {
              setChangePage?.(p);
            }}
            style={{
              border: p === page ? '2px solid green' : '2px solid grey',
              padding: 10,
              margin: 5,
              borderRadius: '5px',
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pagination;
