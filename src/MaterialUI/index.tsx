import React, { memo } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { FiCpu, FiMessageSquare, FiUsers } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';

const MenuMaterialUI: React.FC = ({ children }) => {
  const history = useHistory();

  const [value, setValue] = React.useState(0);

  /* eslint-disable-next-line @typescript-eslint/ban-types */
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <Container>
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Usuários"
            icon={<FiUsers />}
            onClick={() => history.push('/')}
          />
          <Tab
            label="Profile"
            icon={<FiCpu />}
            onClick={() => history.push('/profile')}
          />
          <Tab
            label="Notificações"
            icon={<FiMessageSquare />}
            onClick={() => history.push('/notifications')}
          />
        </Tabs>
      </AppBar>
      {children}
    </Container>
  );
};
export default MenuMaterialUI;
