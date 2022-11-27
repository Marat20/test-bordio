import { FC } from 'react';
import styled from 'styled-components';
import { Columns } from '../tasks/tasks';
import { Task } from './Task';

const WrapperCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f3f3f3;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #222222;
  padding: 27px 0 15px;

  &::last-child {
    border-right: 1px solid #f3f3f3;
  }
`;

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #f3f3f3;
  height: 79vh;

  div:first-child {
    margin-top: 39px;
  }
`;

const CountWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 2px 10px;
  height: 20px;
  background: #e8ebef;
  border-radius: 100px;
`;

export const Column: FC<Columns> = ({ name, count, tasks }) => {
  return (
    <div>
      <WrapperCategory>
        <span>{name}</span>
        <CountWrapper>{count}</CountWrapper>
      </WrapperCategory>

      <WrapperColumn>
        {tasks?.map((task, idx) => (
          <Task key={idx} {...task} />
        ))}
      </WrapperColumn>
    </div>
  );
};
