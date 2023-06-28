import styled from "styled-components";

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme["base-card"]};



  #ListItemCart {
    background-color: ${props => props.theme["purple-dark"]};
    border-radius: 6px;
    color: ${props => props.theme["base-card"]};
  }
`;