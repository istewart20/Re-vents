import EventDashboard from '../../Features/events/eventDashboard/EventDashboard';
import NavBar from '../../Features/nav/NavBar';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Re-vents</h1>
      <NavBar />
      <EventDashboard />
    </div>
  );
}

export default App;
