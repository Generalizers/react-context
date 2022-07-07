import { UserProvider } from '../../shared/contexts';
import { User } from '../User';
import { FunctionComponent } from 'react';

export const ObjectT: FunctionComponent = () => {
  return (
    <UserProvider>
      <User />
      <UserProvider value={{ name: 'Bertrand', age: 59 }}>
        <User />
      </UserProvider>
    </UserProvider>
  );
};
