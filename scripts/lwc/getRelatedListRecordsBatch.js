import { getRelatedListRecordsBatch } from 'lightning/uiRelatedListApi';

@wire(getRelatedListRecordsBatch, {
    parentRecordId: "001RM000003UNu6YAG",
    relatedListParameters: [
      {
        relatedListId: "Contacts",
        fields: ["Contact.Name", "Contact.Id"],
        sortBy: ["Contact.Name"],
      },
      {
        relatedListId: "Opportunities",
        fields: ["Opportunity.Name", "Opportunity.Amount"],
        sortBy: ["Opportunity.Amount"],
      },
    ],
  })