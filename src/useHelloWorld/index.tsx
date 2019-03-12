import * as React from 'react';

const useHelloWorld = (): [
  string, (str: string) => void
] => {
  const [state, setState] = React.useState('');

  const dispatch = (str: string) => {
    if(str === 'hello') {
      setState('world');
    }
  }

  return [state, dispatch];
};

export default useHelloWorld;
