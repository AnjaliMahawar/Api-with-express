let testLogic=(req,res)=>{
  var names=['Anjali','Kiran','Shivk','Payal','Abhishek','Ruchika','Anil','Gunjan']
  
    function getRamdomDateInBetween(start, end) {
        //start = Date.parse(2021-01-01);
        //start = Date.parse('2022-07-30');
       // end = Date.parse('2022-08-15');
       //7 day before
       var date1 = new Date();
     var start=  date1.setDate(date1.getDate() - 7);
    // console.log(start)

       //var finalDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();
       //after 7 day
       const date2 = new Date();
      var end=  date2.setDate(date2. getDate() + 7)
      //console.log(end)
    
         let date3=new Date(Math.floor(Math.random() * (end - start + 1) + start));
         //const unixTimestamp = Math.floor(date.getTime() / 1000);
         const unixTT=Math.floor(date3);
        return unixTT;
       //return date2;
    }
    
   // console.log(getRamdomDateInBetween());
    if( Math.random() > 0.5 ?true:false){

        let orderArr = [];
        //True
       

        for(var i=1; i < Math.ceil(Math.random()*20) ; i++){
            //console.log('hi')
            let order = {
                //  "order_id": for(let i=1588;i<=1988;i++),
                "customer_Name":names[parseInt(Math.random() * (names.length- 0) + 0) ],
                 "order_id":Math.ceil( Math.random() * (9556 - 4556) + 4556) ,
                  "arrives_at_utc": getRamdomDateInBetween(),
                  "paid_with": Math.random() > 0.5 ?"Cash":"Wallet",
                //  "total_paid": Math.random() * (20 - 10) + 10 
                "total_paid":parseFloat((Math.random() * (20.00 - 10.00 + 1.00) + 10.00).toFixed(2))
            } 
            orderArr = [
                            ...orderArr,
                            order
                        ]
        }

        
        //for(orders=order;orders<=5;orders++)
        //let x=order;
       // for(let i=1;i<=5;i++){
            
      //  }
        res.status(200).json({
            orders:orderArr
          //  orders:order,order,
          //  orders2:order
        
        });
    }else{
        //False
        res.status(503).send();
    }


}
  exports.testController=testLogic