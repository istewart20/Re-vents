import { Container } from 'semantic-ui-react';
import EventDashboard from '../../Features/events/eventDashboard/EventDashboard';
import NavBar from '../../Features/nav/NavBar';
import './styles.css';

function App() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
