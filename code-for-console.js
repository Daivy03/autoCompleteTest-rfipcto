    var inputs = document.querySelectorAll('input[type=radio]');

    for (let i in inputs){
        if( inputs[i].value == 1){
            setTimeout(inputs[i].click(),800);
            console.log('Test Completato!');
        }
        setTimeout(homepage(),60000);

    }
    function homepage(){
        window.location.href = 'https://www.educazionedigitale.it/rfipcto/moduli-formativi/'
    }s