import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 72px);

  background: #f7f7f7;
  overflow: hidden;
`;

export const Title = styled.p`
  margin: 20px 20px;
  font-size: 20px;
  color: #717882;
  font-weight: 500;
`;

export const Table = styled.table`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #ccc;
  width: calc(100% - 40px);
  margin: 10px 20px;
  border-collapse: separate;

  tr {
    height: 30px;

    th {
      font-size: 16px;
      font-weight: 500;
      color: #a8adb3;
      text-align: center;
      align-self: center;

      border-bottom: 1px solid #f1f1f1;
    }
  }

  tr {
    td {
      font-size: 14px;
      color: #717882;
      text-align: center;
    }
  }
`;
