import { LightningElement, track, wire } from 'lwc';
import { gql, graphql } from "lightning/uiGraphQLApi";

const columns = [
    { label : "Name", fieldName : "Name", type : 'text' },
    { label : "Phone", fieldName : "Phone", type : 'phone' },
    { label : "Email", fieldName : "Email", type : 'email' },
    { label : "Account Name", fieldName : "AccountName", type : 'text' },
    { label : "Annual Revenue", fieldName : "AccountRevenue", type : 'currency' },
    { label : "Created Date", fieldName : "CreatedDate", type : 'date' },
]

const records = [
    {
        Name : 'Amit Singh',
        Phone: '123',
        Email: 'asingh@gmail.com',
        AccountName: 'Salesforce.com',
        AccountRevenue: 988873,
        CreatedDate : '2015-3-03'
    }
];

export default class GrpahQLQuery extends LightningElement {

    @track records;
    @track errors;

    searchValue = '';

    dataList = [];
    columnsList = columns;

    get variables(){
        return {
            likeParams: '%'+ this.searchValue + '%',
            limit: 5
        }
    }

    handleChange(event){
        event.preventDefault();
        this.searchValue = event.target.value;
    }
    
    @wire(graphql, {
        query: gql`
            query getContacts(
                $likeParams : String,
                $limit : Int
            ) {
                uiapi {
                query {
                    Contact(
                        first: $limit,
                        orderBy: { Name: { order: ASC } },
                        where: {
                            Name : { like: $likeParams }
                        }
                    ) {
                    edges {
                        node {
                        Id
                        Name {
                            value
                        }
                        Email {
                            value
                        }
                        Phone {
                            value
                        }
                        CreatedDate {
                            value,
                            displayValue
                        }
                        Account {
                            Id
                            Name {
                                value
                            }
                            Rating{
                                value
                                displayValue
                            }
                            AnnualRevenue{
                                value
                                displayValue
                            }
                        }
                        }
                    }
                    
                  }
                }
            }
        }`,
        variables: '$variables'
    })
    wiredGrahpQLResult({data, error}){
        if(data){
            console.log(data);
            this.records = data.uiapi.query.Contact.edges;
            this.dataList = this.records.map( (item) => {
                return {
                    Id : item.node.Id,
                    Name : item.node.Name.value,
                    Phone: item.node.Phone.value,
                    Email: item.node.Email.value,
                    AccountName: item.node.Account.Name.value,
                    AccountRevenue: item.node.Account.AnnualRevenue.value,
                    CreatedDate : item.node.CreatedDate.value,
                }
            });
        } else if (error) {
            console.error(error);
            this.errors = error;
        }
    }
}