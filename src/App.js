import React, { useState, useEffect } from 'react';

import Fissures from './Components/Fissures/Fissures.jsx';
import Sortie from './Components/Sorties/Sorties.jsx';
import SyndicateMissions from './Components/SyndicateMissions/SyndicateMissions.jsx';
import SearchForFissureDrops from './Components/SearchForFissureDrops/SearchForFissureDrops.jsx';
import SearchForWarframes from './Components/SearchForWarframes/SearchForWarframes.jsx';
import SearchForMods from './Components/SearchForMods/SearchForMods.jsx';
import SearchForWeapons from './Components/SearchForWeapons/SearchForWeapons.jsx';
import PlanetsState from './Components/PlanetsState/PlanetsState.jsx';
import NightwaveDisplay from './Components/NightwaveDisplay/NightwaveDisplay.jsx';
import VoidTraderDisplay from './Components/VoidTraderDisplay/VoidTraderDisplay.jsx';
import Loading from './Components/Loading/Loading.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <div className="App">
      <PlanetsState/>
      <VoidTraderDisplay/>
      <div className='App_Search'>
        <SearchForWarframes />
        <SearchForWeapons />
        <SearchForMods />
        <SearchForFissureDrops/>
      </div>
      <div className='App_Activities'>
        <Sortie />
        <SyndicateMissions />
        <NightwaveDisplay />
        <Fissures />
      </div>
    </div>
  );
}

export default App;
