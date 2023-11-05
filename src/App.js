import './App.css';
import SearchTour from './Component/SearchTour/SearchTour';
import Header from './Header/Header';
import TripPage from './Component/TripContainer/TripPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchTour/>
      <TripPage/>
    </div>
  );
}

export default App;
