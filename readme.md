# @generalizers/react-context

## Installation

### npm

```bash
npm i @generalizers/react-context
```

## Add issues

You can add issues to :
https://github.com/Generalizers/react-context/issues

## How to use

### Context creation helper

The context generator create the context for you and wraps the Provider of that context to automatically retreive a state that is then disposed to the user.

```tsx
export const {
  useHook: useUser, // Get the state & setState
  Provider: UserProvider, // Provide a new, unique state
  Consumer: UserConsumer, // Consume the state & setState
} = contextGenerator<UserInterface>(
  {
    name: 'Jeremy',
    age: 38,
  },
  'User', // Context label (optional)
);
```

#### Use in components

This portion of code will increment the age of Jeremy as the seconds pass.
Please note that you can use the `useEffect` hook inside the consumer function.
The function is actually an `Anonymous` component.

```tsx
export const App: FunctionComponent = () => {
  return (
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
    </UserProvider>
  );
};
```
