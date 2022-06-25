import { contextGenerator } from '../utils/context';

import { User } from './interface/User';

export const {
  useHook: useUser,
  Provider: UserProvider,
  Consumer: UserConsumer,
} = contextGenerator<User>(
  {
    name: 'Patrick',
    age: 47,
  },
  'User',
);
