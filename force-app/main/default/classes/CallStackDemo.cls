public class CallStackDemo {

    // Method A
    // 	--> Method B
    // 		--> Method C
    // 			--> Method D
    // 				--> Method E
    // 				
    // Entry Point
    public void methodA(){
        System.debug('Method A is Calling Method B');
        String name = 'Amit Singh';
        Integer age = 34;
        Decimal salary = 89377434.53;
        System.debug('Name is '+ name +' Age is '+ age +' Salary is '+ salary);
        // SOQL
        // DML
        // Callout
        this.methodB();
        System.debug('Method A Executed!');
        System.debug('Name is '+ name +' Age is '+ age +' Salary is '+ salary);
        Boolean isAdult;
        String address;
        String phone;
        String email;
    }
    private void methodB(){
        System.debug('Method B is Calling Method C');
        this.methodC();
        System.debug('Method B Executed!');
    }
    private void methodC(){
        System.debug('Method C is Calling Method D');
        this.methodD();
        System.debug('Method C Executed!');
    }
    private void methodD(){
        System.debug('Method D is Calling Method E');
        this.methodE();
        System.debug('Method D Executed!');
    }
    private void methodE(){
        System.debug('Method E Executed!');
    }
}
