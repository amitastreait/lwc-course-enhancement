public class CallStack_Demo {
    // Method A
    // 	--> Method B
    // 	--> Method C
    // 		--> Method D
    // 	--> Method E
    public void methodA(){
        String name = 'Amit Singh';
        this.methodB();
        Integer age = 34;
        this.methodC();
        Decimal salary = 89377434.53;
        this.methodE();
         System.debug('Name is '+ name +' Age is '+ age +' Salary is '+ salary);
        System.debug('Method A Executed!');
    }
    private void methodB(){
        System.debug('Method B Executed!');
    }
    private void methodC(){
        this.methodD();
        System.debug('Method C Executed!');
    }
    private void methodD(){
        
        System.debug('Method D Executed!');
    }
    private void methodE(){
        System.debug('Method E Executed!');
    }
}