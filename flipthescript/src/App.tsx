// App.tsx
import React from 'react';
import InConstruction from './Components/inConstruction';  // Note the uppercase usage here
import ContactMe from './Components/ContactMe/ContactMe';
import Blog from './Components/Blog/Blog';

const App: React.FC = () => {
  return (
    <>
    {/* <InConstruction /> */}
    {/* <ContactMe /> */}
    <Blog/>
    </>
    
  );
};

export default App;
