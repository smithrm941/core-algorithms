import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe.only('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })
})
