    var inputs = document.querySelectorAll('input[type=radio]');

    for (let i in inputs){
        if( inputs[i].value == 1){
            setTimeout(inputs[i].click(),800);
            console.log('Test Completato!');
        }
    }
 
