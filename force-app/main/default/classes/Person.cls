public class Person {
    // instance variable
    String name; // private
    String personName  { private set; private get; } // String name;
    public String personEmail { private set; public get; }
    public String personPhone { public set; private get; }
    public String personTitle { public set; public get; } // public String title;
    public String title;
    
    private String firstName;
    private String lastName;
    
    public Person(){}
    public Person(String fName, String lName){
        this.firstName = fName;
        this.lastName = lName;
        System.debug(this.firstName);
        System.debug(this.firstName);
    }
    // Setter Method
    public void setFirstName(String firstName){
        System.debug(firstName);
        this.firstName = firstName;
    }
    // Getter Method
    public String getFirstName(){
        System.debug(this.firstName);
        return this.firstName;
    }
}