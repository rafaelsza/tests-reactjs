import React from 'react';
import { FiUser } from 'react-icons/fi';
import MaterialUIPage from '../../MaterialUI';

import { Container, Table, Title } from './styles';

const PageMainUsers: React.FC = () => {
  return (
    <MaterialUIPage>
      <Container>
        <Title>Usuários</Title>
        <Table>
          <tr>
            <th style={{ width: 100 }}>Avatar</th>
            <th>Nome</th>
            <th style={{ width: 150 }}>Nome de usuário</th>
            <th style={{ width: 180 }}>Setor</th>
            <th style={{ width: 150 }}>Função</th>
          </tr>
          <tr>
            <td>
              <FiUser />
            </td>
            <td>Rafael José de Souza</td>
            <td>rafael.souza</td>
            <td>Atendimento de suporte</td>
            <td>Atendente</td>
          </tr>
        </Table>
      </Container>
    </MaterialUIPage>
  );
};
export default PageMainUsers;
