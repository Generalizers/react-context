import { UserProvider } from '../../shared/contexts';
import { User } from '../User';
import { FunctionComponent } from 'react';

export const App: FunctionComponent = () => {
  return (
    <div>
      <div>
        <h1>Default Context value : </h1>
        <User />
      </div>
      <div>
        <h1>Overriden value with own state : </h1>
        <UserProvider>
          <User />
          <User />
          <div>
            <UserProvider>
              <h1>Inner Overriden state with own state : </h1>
              <User />
            </UserProvider>
          </div>
        </UserProvider>
      </div>
    </div>
  );
};
