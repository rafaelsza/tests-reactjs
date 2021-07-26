import styled from 'styled-components';

interface StatusProps {
  isActive: boolean;
}

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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 0 10px;
  margin: 0 10px;
  border: 0;
  outline: 0;
  border-radius: 3px;
  color: ${props => props.theme.palette.primary.contrastText};
  background-color: ${props => props.theme.palette.primary.main};
  transition: background-color 0.2s;
  box-shadow: 0px 0px 5px ${props => props.theme.palette.secondary.light};

  svg {
    margin-right: 5px;
    color: ${props => props.theme.palette.primary.contrastText};
  }

  &:hover {
    background-color: ${props => props.theme.palette.primary.dark};
  }
`;

export const InputSearch = styled.div`
  display: flex;
  padding: 0 10px;
  height: 30px;
  background-color: ${props => props.theme.palette.background.paper};
  box-shadow: 0px 0px 5px ${props => props.theme.palette.secondary.light};
  border-radius: 3px;
  border: 1px solid ${props => props.theme.palette.secondary.light};

  input {
    border: 0;
    outline: 0;
    color: ${props => props.theme.palette.secondary.contrastText};

    &::placeholder {
      color: ${props => props.theme.palette.secondary.main};
    }
  }

  & + & {
    margin-bottom: 20px;
  }
`;

export const Table = styled.table`
  background: ${props => props.theme.palette.background.paper};
  border-radius: 5px;
  box-shadow: 2px 2px 10px ${props => props.theme.palette.secondary.light};
  width: calc(100% - 40px);
  margin: 0 20px;
  border-collapse: collapse;

  tr {
    height: 32px;
    text-align: center;
    align-self: center;
  }

  thead {
    tr {
      th {
        font-size: 16px;
        font-weight: 500;
        color: ${props => props.theme.palette.secondary.main};

        border-bottom: 1px solid
          ${props => props.theme.palette.table.lineHeader};
      }
    }
  }

  tbody {
    tr {
      td {
        font-size: 14px;
        color: ${props => props.theme.palette.secondary.dark};
        cursor: pointer;

        img {
          max-height: 24px;
          border-radius: 5px;
          margin-top: 3px;
        }
      }

      &:hover {
        background-color: ${props => props.theme.palette.table.lineHeader};
      }
    }
  }
`;

export const Status = styled.div<StatusProps>`
  margin: 0 10px;
  background-color: ${props =>
    props.theme.palette.table.status.background[
      props.isActive ? 'active' : 'inactive'
    ]};
  color: ${props =>
    props.theme.palette.table.status.text[
      props.isActive ? 'active' : 'inactive'
    ]};
  border-radius: 10px;
`;
