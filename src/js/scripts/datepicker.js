 $(function () {
   $("#datepicker").datepicker({
     minDate: '0',
     dateFormat: 'dd.mm',
     showOn: "button",
     buttonText: ""
   })
   $('#datepicker').datepicker('setDate', 'today');
 });