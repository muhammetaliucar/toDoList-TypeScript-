import React, {FC} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './TaskCard.style';

interface ICardProps {
  item: {
    id: Number;
    task: string;
    isCompleted: boolean;
    date: Number;
  };
  onDelete: () => void;
}

const TaskCard: FC<ICardProps> = ({item, onDelete}) => {
  let s: string = new Date(item.date).toLocaleDateString('en-US');

  return item.isCompleted ? (
    <TouchableWithoutFeedback onLongPress={onDelete}>
      <View style={styles.completedContainer}>
        <Text style={styles.completedTaskText}>{item.task}</Text>
        <Text style={styles.completedDateText}>{s}</Text>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onLongPress={onDelete}>
      <View style={styles.container}>
        <Text style={styles.taskText}>{item.task}</Text>
        <Text style={styles.dateText}>{s}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TaskCard;
