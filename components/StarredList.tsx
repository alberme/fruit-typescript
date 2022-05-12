import { useContext, FC } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FruitContext } from './context/FruitProvider';
import { FruitContextType } from '../utils/fruitData';
import Item from './ListItem';

const StarredList: FC = () => {
  const { fruitsList } = useContext<FruitContextType>(FruitContext);
  const starredFruitsList = fruitsList.filter(fruitItem => fruitItem.starred);

  return (
    <View style={styles.starredList}>
      <FlatList
        data={starredFruitsList}
        renderItem={({ item }) => (
          <Item 
            id={item.id}
            name={item.name}
            price={item.price}
            starred={item.starred}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  starredList: {
    width: '100%',
    height: '100%',
  }
});

export default StarredList;