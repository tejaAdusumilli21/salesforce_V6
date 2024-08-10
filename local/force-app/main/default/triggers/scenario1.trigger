trigger scenario1 on Account (after insert) {
list<contact> con = new list<contact>();
    for(account acc:trigger.new)
    {
        contact contacts = new contact();
        contacts.LastName = acc.Name;
        contacts.AccountId = acc.Id;
        con.add(contacts);
    }
    insert con;
//when ever a record is inserted to the account automatically insert into contact    
}