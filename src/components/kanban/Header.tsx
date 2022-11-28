import { useState } from 'react';
import styled from 'styled-components';
import {
  IconArrowGrey,
  IconArrowGreyReverse,
  IconNotification,
  IconPlus,
} from '../../media/svg/icons_kanban';
import { Search } from '../search/Search';
import { Dropdown } from './Dropdown';

const WrapperHeader = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 4px #f0f1f2;
`;

const LeftWrapper = styled.div`
  ul {
    display: flex;
    li {
      margin: 20px 8px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      line-height: 16px;
      padding: 8px 20px;
      width: 74px;
      height: 24px;
      background-color: #f5f8fa;
      border-radius: 50px;
      color: #222;
      cursor: pointer;

      svg {
        color: #222;
        margin-left: 15px;
      }

      &:first-child {
        background-color: #0094ff;
        border-radius: 50px;
        margin: 20px 8px 20px 20px;
        color: #fff;
        width: 79px;

        svg {
          margin-right: 7px;
          margin-left: 0;
        }
      }
    }
  }
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
  }
`;

const searchStyle = {
  width: '180px',
  height: '40px',
  backgroundColor: '#F5F8FA',
  borderRadius: '50px',
};

export const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const openList = () => {
    setDropdown(!dropdown);
  };

  return (
    <WrapperHeader>
      <LeftWrapper>
        <ul>
          <li>
            <IconPlus /> Add new
          </li>
          <li onClick={openList}>
            Kanban {!dropdown ? <IconArrowGrey /> : <IconArrowGreyReverse />}
          </li>
          <li>
            Filter <IconArrowGrey />
          </li>
        </ul>
      </LeftWrapper>
      {dropdown && <Dropdown />}
      <RightWrapper>
        <ul>
          <li>
            <Search styles={searchStyle} />
          </li>
          <li>
            <IconNotification />
          </li>
        </ul>
      </RightWrapper>
    </WrapperHeader>
  );
};
