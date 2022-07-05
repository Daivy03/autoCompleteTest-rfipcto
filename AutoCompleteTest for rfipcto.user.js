// ==UserScript==
// @name         AutoCompleteTest for rfipcto
// @namespace    https://github.com/Daivy03?tab=repositories
// @version      0.1
// @description  complete annoying tests
// @author       Daivy03
// @match        https://www.educazionedigitale.it/rfipcto/test/*
// @icon         https://www.rfi.it/etc.clientlibs/settings/wcm/designs/r_f_i/clientlib-all/resources/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var inputs = document.querySelectorAll('input[type=radio]');

    for (let i in inputs){
        if( inputs[i].value == 1){
            setTimeout(inputs[i].click(),800);
            console.log('Test Completato!');
        }
        setTimeout(homepage(),2000);

    }
    function homepage(){
        window.location.href = 'https://www.educazionedigitale.it/rfipcto/moduli-formativi/'
    }
})();