import styled from 'styled-components';
import {
  IconCalendar,
  IconFiles,
  IconNotes,
  IconTasks,
  IconUnion,
} from '../../media/svg/icons_tools';

const Wrapper = styled.aside`
  background-color: #f5f8fa;
  color: #222;
  // height: 110vh;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 24px 0 30px 16px;
`;

const ListWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 14px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  svg {
    margin-right: 15px;
  }
`;

const BlueLine = styled.div`
  position: relative;
  width: 4.12px;
  height: 50px;
  left: 0px;
  top: 0px;
  background: #0094ff;
  border-radius: 0px 10px 10px 0px;
  margin-right: 6px;
`;

const ChoosenList = styled(ListWrapper)`
  width: 138px;
  border-radius: 0px 8px 8px 0px;
  background-color: #fff;
  padding-left: 0;
  svg {
    margin-right: 10px;
  }
`;

export const Tools = () => {
  return (
    <Wrapper>
      <Title>Tools</Title>
      <ul>
        <li>
          <ListWrapper>
            <IconUnion /> Roadmap
          </ListWrapper>
        </li>
        <li>
          <ChoosenList>
          <BlueLine></BlueLine>
            <IconCalendar /> Schedule
          </ChoosenList>
        </li>
        <li>
          <ListWrapper>
            <IconTasks /> Tasks
          </ListWrapper>
        </li>
        <li>
          <ListWrapper>
            <IconNotes /> Notes
          </ListWrapper>
        </li>
        <li>
          <ListWrapper>
            <IconFiles /> Files
          </ListWrapper>
        </li>
      </ul>
    </Wrapper>
  );
};
