import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  done?: boolean;
}

const WrapperTask = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 240px;
  text-decoration: ${({ done }) => done && 'line-through'};
  min-height: 38px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  padding: 15px;
  margin: 0 10px 9.59px;
  color: ${({ done }) => (done ? '#A5A5A5' : '#222222')};
`;

const TimeWrapper = styled.span<Props>`
  color: ${({ done }) => (done ? '#A5A5A5' : '#435e52')};
  margin-top: 2px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
`;

interface ITask {
  name: string;
  time: string;
  color: string;
  done?: boolean;
}

export const Task: FC<ITask> = ({ name, time, color, done }) => {
  return (
    <WrapperTask color={color} done={done}>
      <span>{name}</span>
      <TimeWrapper done={done}>{time}</TimeWrapper>
    </WrapperTask>
  );
};
