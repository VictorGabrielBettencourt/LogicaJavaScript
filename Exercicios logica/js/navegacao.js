

//INICIO - TROCAR DE PAGINA



    //  INICIO - AVANÇAR PÁGINA
    const firstDiv = document.querySelector('.first-step');
    const secondDiv = document.querySelector('.second-step');
    const finalDiv = document.querySelector('.final-step');

    function go(currentStep, nextStep) {
        let dNone, dBlock;
        if (currentStep == 1) {
            dNone = firstDiv;

        } else if (currentStep == 2) {
            dNone = secondDiv;

        } else {
            dNone = finalDiv;

        }

        dNone.style.display = 'none';

        if (nextStep == 1) {
            dBlock = firstDiv;

        } else if (nextStep == 2) {
            dBlock = secondDiv;

        } else {
            dBlock = finalDiv;

        }
        dBlock.style.display = 'block';
    }

   


    // FIM - AVANÇAR PÁGINA

    //INICIO - validação dos campos 
    function validate() {
        const num1 = (document.getElementById('num1'));
        const num2 = (document.getElementById('num2'));

        num1.style.border =
            'none';

        num2.style.border =
            'none';

        if (!num1.value || !num2.value) {
            if (!num1.value && !num2.value) {

                num1.style.border =
                    '1px solid red';

                num2.style.border =
                    '1px solid red';
            } else if (!num1.value) {
                num1.style.border =
                    '1px solid red';
            } else {
                num2.style.border =
                    '1px solid red';
            }
        }
        //FIM - validação dos campos
        //INICIO - CALCULOS 
        else {
            let calculo = parseInt(num1.value) + parseInt(num2.value);
            const result = document.getElementById('resultado');
            console.log(calculo);
            result.innerHTML = calculo;

            go(2, 3);
        }

    }
