interface FruitType {
  id: number;
  name: string;
  price: number;
  starred: boolean;
}

interface FruitContextType {
  fruitsList: FruitType[];
  addFruit: (fruit: FruitType) => void;
  removeFruit: (fruit: FruitType) => void;
  updateFruit: (fruit: FruitType, fruitUpdateData: Partial<FruitType>) => void;
  notInFruitsList: (queryFruit: FruitType) => boolean,
}

const Fruits: FruitType[] = [
  {
    id: 1,
    name: "Mango",
    price: 10,
    starred: false,
  },
  {
    id: 2,
    name: "PineApple",
    price: 20,
    starred: false,
  },
  {
    id: 3,
    name: "Apple",
    price: 12,
    starred: false,
  },
  {
    id: 4,
    name: "Orange",
    price: 7,
    starred: false,
  },
];

export { Fruits, FruitType, FruitContextType };