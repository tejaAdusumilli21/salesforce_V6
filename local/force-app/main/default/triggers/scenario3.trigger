trigger scenario3 on Opportunity (after insert) {
set<id> ids=new set<id>();
    for(Opportunity op:Trigger.new)
    {
        ids.add(op.accountid);
    }
    list<account>ac=[select Total_opportunities__c,Total_Amount__c,(select id,Amount from Opportunities) from account where id=:ids];
    for(account a:ac){
        a.Total_opportunities__c = a.opportunities.size();
        decimal sum=0;
        for(Opportunity p:a.Opportunities){
            sum=sum+p.amount;
        }
        a.Total_Amount__c=sum;
    }
update ac;
}