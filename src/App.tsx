import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, FlatList, Alert} from 'react-native';
import AddTaskModal from './components/AddTaskModal';
import FloatingButton from './components/FloatingButton';
import TaskCard from './components/TaskCard';
import {Home} from './pages/Home/Home';
import Colors from './styles/Colors';
import Fonts from './styles/Fonts';

const App = () => {
  return <Home />;
};

export default App;
