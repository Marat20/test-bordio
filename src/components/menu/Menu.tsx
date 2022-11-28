import styled from 'styled-components';
import { IconLogo } from '../../media/svg/icons_menu';
import { Search } from '../search/Search';
import { ListMenu } from './ListMenu';

const searchStyle = {
  width: '163px',
  height: '32px',
  backgroundColor: '#2D4071',
  borderRadius: '4px',
};

const MenuWrapper = styled.nav`
  background-color: #0f1d40;
  color: #fff;
`;

const LogoWrapper = styled.div`
  padding: 26px 16px;
`;

const SearchWrapper = styled.div`
  padding: 0 16px 16px;
`;

const WorkspaceWrapper = styled.div`
  display: flex;
  flex-diraction: row;
  align-items: center;
  background: #2d4071;
  height: 34px;
  color: #fff;
  margin-bottom: 17px;
`;

const ProfileWrapper = styled.div`
  padding-left: 16px;
  width: 22px;
  height: 22px;
`;

export const Menu = () => {
  return (
    <MenuWrapper>
      <LogoWrapper>
        <IconLogo />
      </LogoWrapper>
      <SearchWrapper>
        <Search styles={searchStyle} />
      </SearchWrapper>
      <WorkspaceWrapper>
        <ProfileWrapper></ProfileWrapper>
        My workspace
      </WorkspaceWrapper>
      <ListMenu title='Favorites' subtitles={['Marketing', 'Mobile App']} />
      <ListMenu
        title='My Projects'
        subtitles={[
          'Marketing',
          'Landing Page',
          'Wedding',
          'Mobile App',
          'House Construction',
        ]}
      />
    </MenuWrapper>
  );
};
