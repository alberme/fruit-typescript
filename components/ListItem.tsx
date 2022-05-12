import { useContext, FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FruitType, FruitContextType } from '../utils/fruitData';
import { FruitContext } from './context/FruitProvider';
import globalStyles from '../utils/globalStyles';

const Item: FC<FruitType> = (props) => {
  const { updateFruit } = useContext<FruitContextType>(FruitContext);

  return (
    <View style={styles.container}>
      <View style={styles.itemTitleContainer}>
        <TouchableOpacity
          onPress={() => {
            const selectedFruit = {...props};
            updateFruit(selectedFruit, { starred: !selectedFruit.starred });
          }}
          style={styles.star}
        >
          <FontAwesome name={props.starred ? "star" : "star-o"} size={20} color="#555" />
        </TouchableOpacity>
        <Text style={globalStyles.text}>{props.name}</Text>
      </View>
      <Text>{props.price}</Text>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    padding: 10,
  },
  item: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  star: {
    paddingRight: 15
  },
  itemTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 100,
  }
})