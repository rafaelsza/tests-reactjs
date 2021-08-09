import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { v4 } from 'uuid';

import {
  Container,
  Table,
  Toolbar,
  Title,
  Button,
  InputSearch,
  Status,
} from './styles';

interface IUser {
  id: string;
  avatar_url: string;
  name: string;
  username: string;
  sector: string;
  occupation: string;
  birth_date: string;
  status: boolean;
}

const users: IUser[] = [
  {
    id: v4(),
    avatar_url: 'https://github.com/rafaelsza.png',
    name: 'Rafael José de Souza',
    username: 'rafael.souza',
    sector: 'Atendimento de suporte',
    occupation: 'Atendente',
    birth_date: '1993-09-25T03:00:00.000Z',
    status: true,
  },
  {
    id: v4(),
    avatar_url:
      'https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png',
    name: 'Joãozinho da Direct',
    username: 'joao.direct',
    sector: 'Atendimento de suporte',
    occupation: 'Supervisor',
    birth_date: '1998-05-25T03:00:00.000Z',
    status: true,
  },
  {
    id: v4(),
    avatar_url:
      'https://pickaface.net/gallery/avatar/29659976_190208_1931_x7bs7.png',
    name: 'Mariazinha da Direct',
    username: 'maria.direct',
    sector: 'Atendimento de suporte',
    occupation: 'Atendente',
    birth_date: '1990-01-01T03:00:00.000Z',
    status: false,
  },
];

const PageMainUsers: React.FC = () => {
  return (
    <Container>
      <Toolbar>
        <Title>Usuários</Title>
        <div>
          <Button type="button">
            <FiPlusSquare />
            Criar novo
          </Button>

          <InputSearch>
            <input id="search" type="text" placeholder="Pesquisar" />
          </InputSearch>
        </div>
      </Toolbar>

      <Table>
        <thead>
          <tr>
            <th style={{ width: 100 }}>Avatar</th>
            <th style={{ width: 250 }}>Nome</th>
            <th style={{ width: 150 }}>Nome de usuário</th>
            <th style={{ width: 200 }}>Setor</th>
            <th style={{ width: 150 }}>Função</th>
            <th style={{ width: 150 }}>Data de nascimento</th>
            <th style={{ width: 80 }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar_url} alt={user.name} />
              </td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.sector}</td>
              <td>{user.occupation}</td>
              <td>{new Date(user.birth_date).toLocaleDateString()}</td>
              <td>
                <Status isActive={user.status}>
                  {user.status ? 'Ativo' : 'Inativo'}
                </Status>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default PageMainUsers;
