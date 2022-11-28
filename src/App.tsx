import { Kanban } from './components/kanban/Kanban';
import { Menu } from './components/menu/Menu';
import { Tools } from './components/sidebar/Tools';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 219px 154px 1537px;
  height: 100vh;
`;

export const App = () => {
  return (
    <Wrapper>
      <Menu />
      <Tools />
      <Kanban />
    </Wrapper>
  );
};
