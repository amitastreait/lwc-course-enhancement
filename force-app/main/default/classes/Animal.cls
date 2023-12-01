public class Animal {
    
    public Animal(){
        System.debug('Inside Constructor');
    }
    
    // Instance/Object Variables
    public String name = 'Max';
    public Integer age = 5;
    
    // Static/Class Variable
    public static String breed = 'Labra';
    
    public void run(){
        System.debug('Dog is Running');
    }
    public String getBreed(){
        return breed;
    }
    public String getName(){
        return 'Max';
    }
    public Integer getAge(){
        return age;
    }
    public void printDetails(){
        // Name
        // Age
        // Breed
        String name = getName();
        Integer age = getAge();
        speak();
    }
    public Integer add(Integer number1, Integer number2){ //arguments
        Integer sum = number1 + number2;
        return sum;
    }
    
    // <Access Modifier> static returntype nameofYourMethod(arguments){ //Logic Here }
    
    public static void speak(){
        // Max is Speaking
        // Tylor is Speaking
        // name + ' is Speaking'
        System.debug(breed + ' is Speaking');
    }
    
}