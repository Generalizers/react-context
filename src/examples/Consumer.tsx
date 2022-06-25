import { UserConsumer, UserProvider } from '../shared/contexts';
import { useEffect } from 'react';

<UserProvider>
  {/* The default value is default context value */}
  {/* The state relies in the Provider and is mutable */}
  <UserConsumer>
    {([user, setUser]) => {
      useEffect(() => {
        setTimeout(() => {
          setUser({ ...user, age: user.age + 1 });
        }, 1000);
      }, [user.age]);

      return (
        <div>
          {user.name} - {user.age} years old
        </div>
      );
    }}
  </UserConsumer>
</UserProvider>;
