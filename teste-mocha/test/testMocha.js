const assert = require('chai').assert;
const soma = require('../mocha').soma;
const lista = require('../mocha').lista;
const lista2 = require('../mocha').lista2;
const atributo = require('../mocha').atributo;
const atributo2 = require('../mocha').atributo2;
const frase = require('../mocha').frase;
const frase2 = require('../mocha').frase2;
const frase3 = require('../mocha').frase3;

describe('Mocha', function(){
    it('Mocha soma deve retornar 2', function(){
        let resultado = soma();
        assert.equal(resultado, 2);
    });

    it('Soma should not return 7 ', function(){
        let resultado = soma();
        assert.notEqual(resultado, 7);
    })

    it('Lista should include 3', function(){
        let resultado = lista();
        assert.include(resultado, 3);
    })

    it('Lista should not include', function(){
        let resultado = lista2();
        assert.notInclude(resultado, "TDD é top");
    })

    it('Atributo should include attr1', function(){
        let resultado = atributo();
        assert.nestedProperty(resultado, 'attr1');
    })

    it('Atributo should not include attr1', function(){
        let resultado = atributo2();
        assert.notNestedProperty(resultado, 'attr1');
    })

    it('Frase should have: Investtools', function(){
        let resultado = frase();
        assert.match(resultado, /(Investtools)/);
    })

    it('Frase should have: Investtools', function(){
        let resultado = frase2();
        assert.match(resultado, /(Investtools)/);
    })

    it('Frase should have: Investtools', function(){
        let resultado = frase3();
        assert.match(resultado, /(Investtools)/);
    })

});