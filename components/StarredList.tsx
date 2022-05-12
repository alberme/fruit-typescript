import { useContext, FC } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { FruitContext } from './context/FruitProvider';
import { FruitContextType } from '../utils/fruitData';
import globalStyles from '../utils/globalStyles';
import Item from './ListItem';

const StarredList: FC = () => {
  const { fruitsList } = useContext<FruitContextType>(FruitContext);
  const starredFruitsList = fruitsList.filter(fruitItem => fruitItem.starred);

  return (
    <View style={styles.starredList}>
      {starredFruitsList.length === 0 ? (
        <Text style={globalStyles.text}>You have no starred fruits!</Text>
      ) : (
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
      )}
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