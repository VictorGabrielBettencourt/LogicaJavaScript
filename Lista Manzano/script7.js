//Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa de 1 até 500.

contadora = 1;
acumuladora = 0;
do {
    if (contadora%2==0) {
        acumuladora = acumuladora+contadora;
    }

} while (contadora <= 500);
