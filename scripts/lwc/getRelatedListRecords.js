import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

@wire(getRelatedListRecords, {
    parentRecordId: '001RM000003UNu6YAG',
    relatedListId: 'Contacts',
    fields: ['Contact.Name','Contact.Id'],
    sortBy: ['Contact.Name']
  })