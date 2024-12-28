// import "./App.css";
import HabitCalendar from "./components/page/calender";
import Navbar from "./components/base/navbar";
function App() {
  return (
    <>
          <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HabitCalendar />} />
        <Route path="/create" element={<CreateHabit />} />
      </Routes>
    </Router>
      <HabitCalendar />
    </>
  );
}

export default App;
