import { FC } from 'react';
import styled from 'styled-components';
import { IconArrow } from '../../media/svg/icons_menu';

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-left: 16px;
  color: white;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-diraction: row;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 22px;
`;

const SublistWrapper = styled(ListWrapper)`
  color: #8c939f;
  padding-left: 0;
  li {
    padding-bottom: 18px;
  }
`;

interface Props {
  title: string;
  subtitles: string[];
}

export const ListMenu: FC<Props> = ({ title, subtitles }) => {
  return (
    <ListWrapper>
      <li>
        <TitleWrapper>
          <IconArrow /> {title}
        </TitleWrapper>
        <SublistWrapper>
          {subtitles.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </SublistWrapper>
      </li>
    </ListWrapper>
  );
};
