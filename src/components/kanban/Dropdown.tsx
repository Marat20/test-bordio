import styled from 'styled-components';

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6px;
  position: absolute;
  width: 132px;
  height: 132px;
  left: 528px;
  top: 68px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
    div {
      height: 40px;
      width: 120px;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 8px 0 8px 12px;

      &:hover {
        background-color: #f5f8fa;
        border-radius: 8px;

      }
    }
  }
`;

export const Dropdown = () => {
  return (
    <DropdownWrapper>
      <div>Board view</div>
      <div>Table view</div>
      <div>Kanban</div>
    </DropdownWrapper>
  );
};
