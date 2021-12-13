import { Box } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

function App() {
  return (
    <Box position="relative" minHeight="100vh" pb="64px">
      <Header />
      <TodoList />
      <Footer />
    </Box>
  );
}

export default App;
