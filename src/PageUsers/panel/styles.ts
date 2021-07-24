import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 72px);
  overflow: hidden;
`;

export const Toolbar = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px;

  div {
    display: flex;
    height: 100%;
  }
`;

export const Title = styled.p`
  margin: 0 20px;
  font-size: 20px;
  color: ${props => props.theme.palette.secondary.contrastText};
  font-weight: 500;
`;

export const Panel = styled.table`
  display: flex;
  align-items: stretch;
  background: ${props => props.theme.palette.background.paper};
  border-radius: 5px;
  box-shadow: 2px 2px 10px ${props => props.theme.palette.secondary.light};
  width: calc(100% - 40px);
  height: calc(100% - 100px);
  margin: 0 20px;
`;

export const PanelLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PanelRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border-right: 1px solid ${props => props.theme.palette.secondary.light};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      max-height: 256px;
      margin: 0 50px 20px 50px;
      border-radius: 5px;
    }

    h2 {
      color: ${props => props.theme.palette.secondary.contrastText};
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      h4,
      h5 {
        color: ${props => props.theme.palette.secondary.main};
      }
    }
  }
`;

export const UserMenu = styled.div`
  ul {
    list-style: none;
    color: ${props => props.theme.palette.secondary.contrastText};

    li {
      color: ${props => props.theme.palette.primary.contrastText};
      background-color: ${props => props.theme.palette.primary.main};

      div {
        display: flex;
        align-items: center;
        height: 50px;
        margin-left: 20px;

        svg {
          margin-right: 5px;
        }
      }

      &:hover {
        background-color: ${props => props.theme.palette.primary.dark};
      }

      &:last-child {
        border-end-start-radius: 5px;
      }
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  width: 100%;

  border: 1px solid black;
`;
