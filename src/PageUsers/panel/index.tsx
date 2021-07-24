import React from 'react';
import { FiClipboard, FiEdit, FiKey, FiRotateCcw } from 'react-icons/fi';

import MaterialUIPage from '../../MaterialUI';
import { InputSearch } from '../main/styles';

import {
  Container,
  Panel,
  PanelLeft,
  PanelRight,
  Title,
  Toolbar,
  UserData,
  UserMenu,
  Form,
} from './styles';

const PanelUser: React.FC = () => {
  return (
    <MaterialUIPage>
      <Container>
        <Toolbar>
          <Title>{`Usuários > Joãozinho da Direct`}</Title>
        </Toolbar>
        <Panel>
          <PanelLeft>
            <UserData>
              <div>
                <img
                  src="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png"
                  alt="img"
                />
                <h2>Joãozinho da Direct</h2>
                <div>
                  <h4>Atendimento de suporte</h4>
                  <h5>joao.direct | Atendente</h5>
                </div>
              </div>
            </UserData>
            <UserMenu>
              <ul>
                <li>
                  <div>
                    <FiEdit />
                    <span>Editar dados</span>
                  </div>
                </li>
                <li>
                  <div>
                    <FiKey />
                    <span>Permissões</span>
                  </div>
                </li>
                <li>
                  <div>
                    <FiRotateCcw />
                    <span>Histórico</span>
                  </div>
                </li>
                <li>
                  <div>
                    <FiClipboard />
                    <span>Registro de auditoria</span>
                  </div>
                </li>
              </ul>
            </UserMenu>
          </PanelLeft>
          <PanelRight>
            <Form>
              <InputSearch>
                <input type="text" placeholder="Nome" />
              </InputSearch>
              <InputSearch>
                <input type="text" placeholder="Nome de usuário" />
              </InputSearch>
            </Form>
          </PanelRight>
        </Panel>
      </Container>
    </MaterialUIPage>
  );
};

export default PanelUser;
