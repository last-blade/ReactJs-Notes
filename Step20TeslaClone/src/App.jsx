import React from 'react';
import Header from './components/Header';
import TeslaModel3 from './components/TeslaModel3';
import TeslaModelY from './components/TeslaModelY';
import TeslaModelX from './components/TeslaModelX';
import TeslaModelS from './components/TeslaModelS';
import CyberTruck from './components/CyberTruck';
import SolarPanels from './components/SolarPanels';
import SolarRoof from './components/SolarRoof';

function App() {
  return (
    <>
      <Header/>
      <TeslaModel3/>
      <TeslaModelY />
      <TeslaModelX />
      <TeslaModelS />
      <CyberTruck />
      <SolarPanels />
      <SolarRoof />
    </>
  );
}

export default App;
