import React, {useState, FC} from 'react';
import {Text, SafeAreaView, FlatList, Alert, Platform} from 'react-native';
import AddTaskModal from '../../components/AddTaskModal';
import FloatingButton from '../../components/FloatingButton';
import TaskCard from '../../components/TaskCard';
import styles from './Home.style';

export const Home: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<any>([]);

  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  const addTask = (taskContent: string) => {
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDuplicate = toDoList.find(
      (todo: any) => todo.task.trim().toLowerCase() === taskContentCheck,
    );
    if (checkDuplicate) {
      Alert.alert('This task already exists.');
    } else if (taskContent === ' ') {
      Alert.alert('This task defunct.');
    } else {
      const newTask = {
        id: toDoList.length + 1,
        task: taskContent,
        isCompleted: false,
        date: Date.now().valueOf(),
      };
      setToDoList((oldTasks: any) => [...oldTasks, newTask]);
      setIsModalVisible(false);
    }
  };

  const deleteTask = (task: any) => {
    if (task.isCompleted === false) {
      const newList = toDoList.map((todo: any) => {
        if (todo.id === task.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      setToDoList(newList);
    } else {
      setToDoList(toDoList.filter((e: any) => e.id !== task.id));
    }
  };

  const renderTaskCard = ({item}: any) => (
    <TaskCard onDelete={() => deleteTask(item)} item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To Do List!</Text>
      <FlatList data={toDoList} renderItem={renderTaskCard} />
      <FloatingButton onPress={handleModalVisible} />
      <AddTaskModal
        onAddTask={addTask}
        isVisible={isModalVisible}
        onClose={handleModalVisible}
      />
    </SafeAreaView>
  );
};
