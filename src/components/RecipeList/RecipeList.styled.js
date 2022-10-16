import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ListItem = styled.li`
  /* :last-child {
    margin-bottom: 8px;
  } */
  display: grid;
  grid-template-columns: repeat(auto-fit, 340px);
  gap: 16px;
`;
