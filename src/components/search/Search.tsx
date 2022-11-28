import { FC } from 'react';
import styled from 'styled-components';
// import { IconSearch } from '../../media/svg/icons';

interface PropsComp {
  width: string;
  height: string;
  borderRadius: string;
  backgroundColor: string;
}

interface Props {
  styles: {
    width: string;
    height: string;
    borderRadius: string;
    backgroundColor: string;
  };
}

const Input = styled.input<PropsComp>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  border: none;
  padding-left: 12px;
`;

export const Search: FC<Props> = ({ styles }) => {
  return (
    <div>
      <Input {...styles} type='text' placeholder='Search...' />
    </div>
  );
};
