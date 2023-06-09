import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Dragons from './components/Dragons';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Dragons" element={<Dragons />} />
      </Route>
    </Routes>
  );
}

export default App;
