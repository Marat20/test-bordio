import styled from 'styled-components';
import { columns } from './tasks/tasks';
import { Column } from './column/Column';
import { LastColumn } from './column/LastColumn';

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 290px 290px 290px 290px 377px;
`;

export const Main = () => {
  return (
    <WrapperGrid>
      {columns.map((column, idx) => (
        <Column key={idx} {...column} />
      ))}
      <LastColumn />
    </WrapperGrid>
  );
};
