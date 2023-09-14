import Fissures from './Components/Fissures/Fissures.jsx';
import Sortie from './Components/Sorties/Sorties.jsx';
import SyndicateMissions from './Components/SyndicateMissions/SyndicateMissions.jsx';
import FissureDrops from './Components/FissureDrops/FissureDrops.jsx';
import SearchForWarframes from './Components/SearchForWarframes/SearchForWarframes.jsx';
import SearchForMods from './Components/SearchForMods/SearchForMods.jsx';
import SearchForWeapons from './Components/SearchForWeapons/SearchForWeapons.jsx';
import PlanetsState from './Components/PlanetsState/PlanetsState.jsx';
import NightwaveDisplay from './Components/NightwaveDisplay/NightwaveDisplay.jsx';
import VoidTraderDisplay from './Components/VoidTraderDisplay/VoidTraderDisplay.jsx';

const App = () => {
  return (
    <div className="App">
      <SearchForWarframes/>
      <hr />
      <hr />
      <SearchForMods/>
      <hr />
      <hr />
      <SearchForWeapons/>
      <hr />
      <hr />
      <Fissures />
      <hr />
      <hr />
      <Sortie />
      <hr />
      <hr />
      <SyndicateMissions />
      <hr />
      <hr />
      <FissureDrops/>
      <hr />
      <hr />
      <PlanetsState/>
      <hr />
      <hr />
      <NightwaveDisplay/>
      <hr />
      <hr />
      <VoidTraderDisplay/>
    </div>
  );
}

export default App;
