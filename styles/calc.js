
              $(function(){
	calc();

	$('#calc_plan').on('change', calc);
	$('#inv_amount').bind('change keyup', calc).on('keypress', isNumberKey);

});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 45 || charCode > 57))
		return false;
	return true;
}

function calc() {

	var plan = $('#calc_plan').val();
	var amount = $('#inv_amount').val();
	var percent;

	switch (plan) {
	    
	    case '5':
			switch (true) {
				case (amount<3):
					percent = 0;
					break;
				
				case (amount<=4): 
					percent = 0;  
					break;	

case (amount<=10): 
					percent = 120;   
					break;	


case (amount<=100): 
					percent = 120; 
					break;	


			   default:
					percent = 120; 
			}
			break;



		case '1':
			switch (true) {
				case (amount<3):
					percent = 0;
					break;
				
				case (amount<=4): 
					percent = 0;  
					break;	

case (amount<=10): 
					percent = 140;   
					break;	


case (amount<=100): 
					percent = 140; 
					break;	


			   default:
					percent = 140; 
			}
			break;




		case '2':
			switch (true) {
				case (amount<10):
					percent = 0; 
					break;
				
				case (amount<=100):  
					percent = 200; 
					break;	

case (amount<=100):
					percent = 200;   
					break;	


case (amount<=1000): 
					percent = 200; 
					break;	


			   default:
					percent = 200;
			}
			break;





		case '3':
			switch (true) {
				case (amount<10):
					percent = 0;
					break;
				
				case (amount<=24):
					percent = 200; 
					break;	

case (amount<=500):
					percent = 200; 
					break;	


case (amount<=10000):
					percent = 200;    
					break;	


			   default:
					percent = 200;
			}
			break;





		case '4':
			switch (true) {
				case (amount<10):
					percent = 0;
					break;
				
				case (amount<=1000):
					percent = 300;
					break;	

case (amount<=1000):
					percent = 300;
					break;	


case (amount<=100000000):
					percent = 300;  
					break;	


			   default:
					percent = 300;
			}
			break;


			
	}

$('#assign_per').text(percent+'%');
	var total = amount*percent/100;
	$('#total_return').text('$'+total.toFixed(2));
	
	if(total <= 0){
		$('#net_profit').text('0.00');
	}else{
		$('#net_profit').text('$'+(total-amount).toFixed(2));
	}
	
	
	

}
        