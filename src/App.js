import Fissures from './Components/Fissures/Fissures.jsx';
import Sortie from './Components/Sorties/Sorties.jsx';
import SyndicateMissions from './Components/SyndicateMissions/SyndicateMissions.jsx';
import FissureDrops from './Components/FissureDrops/FissureDrops.jsx';
import SearchForWarframes from './Components/SearchForWarframes/SearchForWarframes.jsx';
import SearchForMods from './Components/SearchForMods/SearchForMods.jsx';
import PlanetsState from './Components/PlanetsState/PlanetsState.jsx';
import NightwaveDisplay from './Components/NightwaveDisplay/NightwaveDisplay.jsx';

const App = () => {
  return (
    <div className="App">
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
      <SearchForWarframes/>
      <hr />
      <hr />
      <SearchForMods/>
      <hr />
      <hr />
      <PlanetsState/>
      <hr />
      <hr />
      <NightwaveDisplay/>
    </div>
  );
}

export default App;
