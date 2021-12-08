import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './TableCard.styles.js';

export default function TableCard({item, onSelect}) {
  const tableColor = item.isActive ? 'green' : '#bdbdbd';

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={[styles.container, {borderColor: tableColor}]}>
        <View style={styles.image}>
          {item.orders.map((order, i) => (
            <Text key={i} style={styles.order}>
              {order.name}
            </Text>
          ))}
        </View>
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


