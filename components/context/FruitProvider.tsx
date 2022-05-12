import { useState, createContext, FC } from "react";
import { Fruits, FruitType, FruitContextType } from "../../utils/fruitData";

const FruitContext = createContext<FruitContextType>({
  fruitsList: [],
  addFruit: () => {},
  removeFruit: () => {},
  updateFruit: () => {},
  notInFruitsList: () => false,
});

const FruitProvider: FC = ({ children }) => {
  const [fruitsList, setFruitsList] = useState<FruitType[]>(Fruits);

  const notInFruitsList = (queryFruit: FruitType): boolean => fruitsList.every(
    fruit => fruit.id !== queryFruit.id
      && fruit.name.toLowerCase() !== queryFruit.name.toLowerCase()
  );

  const addFruit = (fruit: FruitType): void => {
    if (notInFruitsList(fruit)) { 
      setFruitsList([...fruitsList, fruit]);
    } else {
      console.warn('addFruit(): Duplicate fruit!', fruit);
    }
  }

  const removeFruit = (fruit: FruitType): void => {
    const filteredFruits = fruitsList.filter(fruitItem => fruitItem.id !== fruit.id);
    setFruitsList(filteredFruits);
  }

  const updateFruit = (fruit: FruitType, fruitUpdateData: Partial<FruitType>): void => {   
    const updatedFruit = {...fruit, ...fruitUpdateData};
    const updatedFruitList = [...fruitsList];
    const fruitIndex = fruitsList.findIndex(fruitItem => fruitItem.id === fruit.id);

    if (fruitIndex >= 0) {
      updatedFruitList.splice(fruitIndex, 1, updatedFruit);
      setFruitsList(updatedFruitList);
    } else {
      console.warn('updateFruit(): Could not find fruit!', fruit)
    }
  }

  return (
    <FruitContext.Provider
      value={{ fruitsList, addFruit, removeFruit, updateFruit, notInFruitsList }}
    >
      {children}
    </FruitContext.Provider>
  )
}

export { FruitContext, FruitProvider };