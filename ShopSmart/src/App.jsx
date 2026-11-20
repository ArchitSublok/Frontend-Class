import { useState } from 'react';
import './App.css';
import { Navbar } from "./components/Navbar";
import AllItem from './AllItem';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <AllItem searchQuery={searchQuery} />
    </>
  );
}

export default App;