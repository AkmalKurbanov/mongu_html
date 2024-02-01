   $(function () {
     $("#from")
       .datepicker({
           numberOfMonths: 1,
           dateFormat: 'dd.mm.y',
           minDate: '0',
           showOn: "button",
           buttonText: " ",

         }

       )
     $("#to").datepicker({
       numberOfMonths: 1,
       dateFormat: 'dd.mm.y',
       minDate: '0',
       showOn: "button",
       buttonText: " "
     })
     $('#from').datepicker('setDate', 'today');
     $('#to').datepicker('setDate', 'today' + 1);
   });




   $(function () {
     $('#start-date, #end-date').datepicker(    
      {
       beforeShow: customRange,
       dateFormat: "d-M-y",
       minDate: 0,

       onSelect: function (date) {
         if ($('.booking__date-wrap input').val()) {
           $('.booking-js').prop("disabled", false);
         }
         if ($('#start-date').val()) {
           $('#end-date').prop("disabled", false);
         }
       }

     });

   });

   function customRange(input) {

     if (input.id == 'end-date') {
       var minDate = new Date($('#start-date').val());
       minDate.setDate(minDate.getDate() + 1)

       return {
         minDate: minDate

       };
     }

     return {}

   }