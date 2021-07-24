import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { FiBook, FiCast, FiUser } from 'react-icons/fi';

import { Container } from './styles';

const MaterialUIPage: React.FC = ({ children }) => {
  const [value, setValue] = React.useState(0);

  /* eslint-disable-next-line @typescript-eslint/ban-types */
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Usuários" icon={<FiUser />} />
          <Tab label="Banners" icon={<FiCast />} />
          <Tab label="Documentações" icon={<FiBook />} />
        </Tabs>
      </AppBar>
      {children}
    </Container>
  );
};
export default MaterialUIPage;
