import React from 'react';


import Counter from './counter/counter';
import FCounter from './fCounter/fCounter'
import ComponentA from './components/componentA';
import TitleChanger1 from './components/titleChanger1'
import TitleChanger2 from './components/titleChanger2'
export const OrgContext = React.createContext();
export const CourseContext = React.createContext();

function App() {
  return (
    <div> 
        <h1>Welcome to React Day 6 Training</h1>
        <p>class component</p>

        <OrgContext.Provider value={'React Hooks day6'}>
            <CourseContext.Provider value={'Demo on React Context for inner child component'} >
              <ComponentA />
            </CourseContext.Provider>
        </OrgContext.Provider>

        <TitleChanger1/>

        <TitleChanger2/>
    </div>
  );
}

export default App;
