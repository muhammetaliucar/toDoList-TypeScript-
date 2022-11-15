import React, {FC, useState} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import styles from './AddTaskModal.style';
import Modal from 'react-native-modal';

interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAddTask: (task: string) => void;
}

const AddTaskModal: FC<IModalProps> = ({isVisible, onClose, onAddTask}) => {
  const [taskInputValue, setTaskInputValue] = useState<string>();

  const handleAddTask = () => {
    if (taskInputValue) {
      onAddTask(taskInputValue);
    }
    setTaskInputValue('');
  };

  return (
    <Modal
      backdropOpacity={0.7}
      style={styles.modalContainer}
      isVisible={isVisible}
      onBackdropPress={onClose}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Add a task to your list</Text>
        <TextInput
          value={taskInputValue}
          onChangeText={(t: string) => setTaskInputValue(t)}
          style={styles.input}
          placeholder={'Task...'}
          placeholderTextColor={'white'}
          multiline
        />
        <TouchableWithoutFeedback onPress={handleAddTask}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonPlaceHolder}>Add the task!</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default AddTaskModal;
