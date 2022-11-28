import styled from 'styled-components';
import { IconPlusGrey } from '../../../media/svg/icons_kanban';

const WrapperCategory = styled.div`
  height: 24px;
  border-bottom: 1px solid #f3f3f3;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #8c939f;
  padding: 27px 0 15px;
  padding-left: 36px;

  svg {
    margin-right: 4px;
  }
`;

export const LastColumn = () => {
  return (
    <WrapperCategory>
      <IconPlusGrey />
      <span>Create status</span>
    </WrapperCategory>
  );
};
