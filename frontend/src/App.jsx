// import "./App.css";
import HabitCalendar from "./components/page/calender";
import Navbar from "./components/base/navbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateHAbit from "./components/form/create_habit";
function App() {
  return (
    <>
          <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HabitCalendar />} />
        <Route path="/create" element={<CreateHAbit />} />
      </Routes>
    </Router>
      {/* <HabitCalendar /> */}
    </>
  );
}

export default App;
