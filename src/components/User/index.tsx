import { UserConsumer, useUser } from '../../shared/contexts';
import { FunctionComponent } from 'react';

export const User: FunctionComponent = () => {
  return (
    <div>
      <UserConsumer>
        {([user, setUser]) => {
          return (
            <>
              <h3>{user.name}'s' personal information :</h3>
              <div>
                <label>Name:</label>
                <input
                  type={'text'}
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div>
                <label>Age:</label>
                <input
                  type={'number'}
                  value={user.age}
                  onChange={(e) =>
                    setUser({ ...user, age: parseInt(e.target.value) })
                  }
                />
              </div>
            </>
          );
        }}
      </UserConsumer>
    </div>
  );
};
