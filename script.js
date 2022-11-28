//*****************************************************************************
//*                          Controling Function                              *
//*****************************************************************************
function compute() {

    setVariables();
    getDetails();
    
    if (nprinciple < 1) {

            alert("Enter a positive number.")
            resetForm();
            depositAmount.focus();

        } else {

            calculateInterest();
            calculateFutureYear();
            createMessage();
            resetForm();
            
        }

    }

//*****************************************************************************
//*                          Initialize Variables                             *
//*****************************************************************************
function setVariables() {

    const nprinciple = 0;
    const nrate = 0;
    const nyears = 0;
    const ninterest = 0;
    const ntotalinterest = 0;
    const nfutureyear = 0;
               
}

//*****************************************************************************
//*                          Read Values Entered                              *
//*****************************************************************************

function getDetails() {

    nprinciple = Number(depositAmount.value);
    nrate = Number(interestRate.value);
    nyears = Number(numberofYears.value);
        
}

//*****************************************************************************
//*                       Reset Fields on Entry Form                          *
//*****************************************************************************

function resetForm() {

    depositAmount.value = "";
    interestRate.value = 10.25;
    document.getElementById("rate_val").innerText="10.25%"
    numberofYears.value = 1;
    	
}

//*****************************************************************************
//*                         Calcultate Future Year                            *
//*****************************************************************************

function calculateFutureYear() {

    nfutureyear = new Date().getFullYear()+parseInt(nyears);
	    
}

//*****************************************************************************
//*                   Calcultate Total Interested Earned                      *
//*****************************************************************************

function calculateInterest() {

    ninterest = (nprinciple*(nrate/100));
    ntotalinterest = (ninterest*nyears);
	    
}

//*****************************************************************************
//*                        Post Results to Web Page                           *
//*****************************************************************************

function createMessage() {

    document.getElementById("resultsLine01").innerHTML = "If you deposit " + "<mark> <strong>" + nprinciple + "</strong> </mark>" + ","+ "\<br\>";
    document.getElementById("resultsLine02").innerHTML = "at an interest rate of " + "<mark> <strong>" + nrate + "</mark> </strong>" + "% \<br\>";
    document.getElementById("resultsLine03").innerHTML = "You will receive an amount of " + "<mark> <strong>" + ntotalinterest + "</mark> </strong>" + "," + "\<br\>";
    document.getElementById("resultsLine04").innerHTML = "in the year " + "<mark> <strong>" + nfutureyear + "</mark> </strong>" + ".";
        
}

//*****************************************************************************
//*                     Capture Interest Rate Selected                        *
//*****************************************************************************

function updateRate() 
{
    var rateval = document.getElementById("interestRate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

depositAmount.focus();

const buttons = document.querySelectorAll('button');
    
for (const button of buttons) {
    button.addEventListener('click', compute);
  }
  


        