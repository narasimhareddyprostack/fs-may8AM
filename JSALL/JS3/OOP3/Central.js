class Central {
    tax = 5
}
class KA extends Central {
    tax = 18;
    tax_Benifit = 1;
}
class Goa extends Central {
    tax = 4;
    tax_Benifit = 0
}
class Puducherry extends Central {
    tax_Benifit = 5;
}
console.log(new Puducherry().tax)
