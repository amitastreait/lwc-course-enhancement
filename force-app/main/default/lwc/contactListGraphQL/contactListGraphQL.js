import { LightningElement, track, wire } from 'lwc';
import { gql, graphql } from "lightning/uiGraphQLApi";
import { log } from 'lightning/logger';
const columns = [
    { label : "Name", fieldName : "Name", type : 'text' },
    { label : "Phone", fieldName : "Phone", type : 'phone' },
    { label : "Email", fieldName : "Email", type : 'email' },
    { label : "Account Name", fieldName : "AccountName", type : 'text' },
    { label : "Annual Revenue", fieldName : "AccountRevenue", type : 'currency' },
    { label : "Created Date", fieldName : "CreatedDate", type : 'text' },
]
export default class ContactListGraphQL extends LightningElement {
    
    @track errors;

    searchValue = '';

    dataList = [];
    columnsList = columns;
    after = null;
    pageInfo;
    pageNumber = 1;
    totalCount = 0;
    pageSize = 5;
    isLoading = false;

    connectedCallback(){
        this.isLoading = true;
    }

    get variables(){
        return {
            likeParams: '%'+ this.searchValue + '%',
            limit: this.pageSize,
            after: this.after
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
                $limit : Int,
                $after : String
            ) {
                uiapi {
                query {
                    Contact(
                        first: $limit,
                        orderBy: { Name: { order: ASC } },
                        where: {
                            Name : { like: $likeParams }
                        },
                        after: $after
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
                    totalCount
                    pageInfo{
                        hasNextPage
                        hasPreviousPage
                        startCursor
                        endCursor
                    }
                  }
                }
            }
        }`,
        variables: '$variables'
    })
    wiredGrahpQLResult({data, error}){
        if(data){
            log(data);
            this.pageInfo = data.uiapi.query?.Contact?.pageInfo;
            this.totalCount = data.uiapi.query?.Contact?.totalCount;
            this.dataList = data.uiapi.query?.Contact?.edges?.map( (item) => {
                return {
                    Id : item.node.Id,
                    Name : item.node.Name.value,
                    Phone: item.node.Phone.value,
                    Email: item.node.Email.value,
                    AccountName: item.node.Account?.Name.value,
                    AccountRevenue: item.node.Account?.AnnualRevenue?.value,
                    CreatedDate : item.node.CreatedDate.displayValue,
                }
            });
            this.isLoading = false;
        } else if (error) {
            console.error(error);
            this.errors = error;
            this.isLoading = false;
        }
    }

    get totalPages(){
        return Math.ceil( this.totalCount / this.pageSize );
    }

    get disableNextButton(){
        return !this.pageInfo?.hasNextPage;
    }

    handleReset(event){
        event.preventDefault();
        this.isLoading = true;
        this.after = null;
        this.pageNumber = 1;
    }

    handleNext(event) {
        event.preventDefault();
        this.isLoading = true;
        if(this.pageInfo && this.pageInfo.hasNextPage){
            this.after = this.pageInfo.endCursor;
            this.pageNumber++;
        }else{
            this.after = null;
            this.pageNumber = 1;
        }
    }
}