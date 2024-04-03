import React, {FC} from 'react';

import Main from './src/screens/Main';
import {LocationProvider} from './src/store/context/LocationProvider';

const App: FC = () => {
  return (
    <LocationProvider>
      <Main />
    </LocationProvider>
  );
};

export default App;
