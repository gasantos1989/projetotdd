const assert = require('chai').assert;
const soma = require('../somaMocha').soma;

describe('Soma', function(){
    it('Soma deve retornar n1+n2', function(){
        let resultado = soma(1, 1);
        assert.equal(resultado, 2);
    })
    it('Soma deve retornar n1+n2', function(){
        let resultado = soma(2, 2);
        assert.equal(resultado, 4);
    })

    it('Soma deve retornar n1+n2', function(){
        let resultado = soma(4, 5);
        assert.equal(resultado, 9);
    })

    it('Soma deve retornar n1+n2', function(){
        let resultado = soma(6, 7);
        assert.equal(resultado, 13);
    })

    it('Soma deve retornar n1+n2', function(){
        let resultado = soma(9, 9);
        assert.equal(resultado, 18);
    })  
})