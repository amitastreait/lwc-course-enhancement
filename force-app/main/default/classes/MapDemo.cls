public class MapDemo {
    
    public void mapDemos(){
        //Map<KeyDataType, ValueDataType> nameOftheMap = new Map<KeyDataType, ValueDataType>();
        // Coutry Name -- Currency Code
        Map<String, String> countryToCurrencyMap;
        System.debug(countryToCurrencyMap); //null
        Map<String, String> countryToCurrencyMapNew = new Map<String, String>();
        Set<String> emailIdsSet = new Set<String>();
        List<String> fruitsList = new List<String>();
        System.debug(countryToCurrencyMapNew);
        Map<String, String> countryToCurrencyMapNew1 = new Map<String, String>{
            'United State'=>'USD', 
                'India'=>'INR',
                'Japan'=>'YEN'
                };
                    System.debug(countryToCurrencyMapNew1);
        
        // Employee Id => Salary
        Map<String, Decimal> employeeIdToSalaryMap = new Map<String, Decimal>{
            'EMPS-3453' => 45435, '3453' => 454359
                };
                    System.debug(employeeIdToSalaryMap);
        // Map< Set<String>, List<String>> countryToCurrencyMap;
        
        // Coutry - Multiple States (List<String>)
        // State - Multiple Cities (List<String>)
        List<String> statesList = new List<String>{'Delhi', 'Hyderabaad', 'Jaipur', 'Bengalure'};
            Map<String, List<String> > countryToStatesMap = new Map<String, List<String> >{
                'India' => statesList
                    };
                        System.debug(countryToStatesMap);
        List<String> citiesList = new List<String>{};
            Map<String, List<String> > stateToCitiesMap   = new Map<String, List<String> >{
                'Delhi' => new List<String>{}
            };
                
                System.debug(stateToCitiesMap);
        
        // Account Id => Contacts, Account Id => Cases
        List<Contact> contactsList = new List<Contact>();
        Contact contactRecord = new Contact();
        contactsList.add(contactRecord);
        
        Map<Id, List<Contact> > accountIdToContactMap = new Map<Id, List<Contact> >{
            '0015g00001Qn9M9AAJ' => contactsList
                };
                    System.debug(accountIdToContactMap);
        
    }
    public static void methodB(){
        Map<String, String> countryToCurrency = new Map<String, String>{
            'United State'=>'USD', 
                'India'=>'INR',
                'Japan'=>'YEN'
                };
                    countryToCurrency.put('France', 'EUR');
        countryToCurrency.put('India', 'Rupee');
        System.debug(countryToCurrency);
        Set<String> countryNameSet = countryToCurrency.keySet();
        System.debug(countryNameSet);
        
        List<String> currencyCodeList = countryToCurrency.values();
        System.debug('#### currencyCodeList '+currencyCodeList);
        // keySet() = Set<Key Data Type>
        // values() = List<Value Data Type>
        
        Boolean isContainsAus = countryToCurrency.containsKey('Australia');
        System.debug(isContainsAus);
        if(isContainsAus == true){
            String ausCurrency = countryToCurrency.get('Australia');
            System.debug(ausCurrency);
        } else {
            countryToCurrency.put('Australia', 'AUS Dollers');
        }
        System.debug(countryToCurrency);
        if(isContainsAus){
            String ausCurrency = countryToCurrency.get('Australia');
            System.debug(ausCurrency);
        }
        
        List<Contact> contactsList = new List<Contact>();
        Contact contactRecord = new Contact();
        contactsList.add(contactRecord);
        
        Map<Id, List<Contact> > accountIdToContactMap = new Map<Id, List<Contact> >{
            '0015g00001Qn9M9AAJ' => contactsList
                };
                    List<Contact> contactsList2 = new List<Contact>();
        accountIdToContactMap.put('0015g00001Qn9M4AAJ', contactsList2);
        System.debug(accountIdToContactMap);
        Set<Id> accountIdsSet = accountIdToContactMap.keySet();
        System.debug('accountIdsSet '+ accountIdsSet);
        
        List< List<Contact> > tempContactsList = accountIdToContactMap.values();
        System.debug('#### tempContactsList '+ tempContactsList);
        
        // 0015g00001Qn9MCAAZ - [ 3 Contacts ]
        
        if(accountIdToContactMap.containsKey('0015g00001Qn9MCAAZ') == false){
            
        }
        if( accountIdToContactMap.containsKey('0015g00001Qn9MCAAZ') ){
            
        } else {
            List<Contact> tempList = new List<Contact>(); // size = 0 
            Contact contactRecord1 = new Contact();
            tempList.add(contactRecord1);
            accountIdToContactMap.put('0015g00001Qn9MCAAZ', tempList );
        }
        System.debug('#### accountIdToContactMap '+ accountIdToContactMap);
        
        
    }
}