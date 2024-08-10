trigger scenario2 on Contact (after insert) {
 if(Recursive.flag){
     Recursive.flag=false;
     list<account> a = new list<account>();
     for(contact c:trigger.new)
     {
         account a1 = new account();
         a1.Phone=c.Phone;
         a1.Name= c.LastName;
         a.add(a1);
     }
     insert a;
     
  }
   // Recursive Trigger fire:
   // 3.avoid recursive trigger
   
}