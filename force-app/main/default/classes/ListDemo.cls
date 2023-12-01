public class ListDemo {

    public void methodA(){
        
        // List<Data Type> variableList = new List<Data Type>();
        // Variable Declaration
        List<String> fruitsList; // null
        System.debug(fruitsList); // null
        // Variable Declaration & Memory Assignment
        List<String> fruitsList1 = new List<String>();
        System.debug(fruitsList1); // ()
        // Variable Declaration, Memory Assignment & Value Assignment
        List<String> fruitsList2 = new List<String>{'Grapes','Apple','Orange','Banana'};
        System.debug(fruitsList2); // ('Apple','Orange','Banana')
        // Size = No of Elements in the List = 4
        // Start Index = 0 (Always starts from 0)
        // last Index = Size - 1 = 3
    }
    
    public void methodB(){
        List<String> fruitsList;
        //System.debug(fruitsList.size() ); // Exception - NullPointer Exception
        if(fruitsList == null){
            fruitsList = new List<String>();
        }
        fruitsList.add('Grapes');
        fruitsList.add('345');
        List<String> fruitsList1 = new List<String>();
        System.debug(fruitsList1.size()); // 0
        System.debug(fruitsList1.isEmpty());// TRUE
        List<String> fruitsList2 = new List<String>{'Grapes','Apple','Orange','Banana'};
        //'Grapes','Apple','Orange','Banana'
        // 0, 1, 2, 3  
        fruitsList2.set(0, 'Pine Apple');
        fruitsList2.add('Pine Apple');
        System.debug(fruitsList2);
        System.debug(fruitsList2.isEmpty());
        List<Integer> numbersList = new List<Integer>{2,5,35,3,5433,322};
        System.debug(fruitsList2.size()); // 4
        // fruitsList2.get(4); //List Index out of bound
        if(fruitsList2.size() > 4){
            fruitsList2.get(4);
        }
        String fruit = fruitsList2.get(2);
        Integer numberx = numbersList.get(4);
        System.debug(fruit);
        System.debug(numberx);
        System.debug(fruitsList2.get(0));
        fruitsList2.clear();
        System.debug(fruitsList2);
    }
}