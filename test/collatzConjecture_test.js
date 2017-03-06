import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){
  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('returns the Collatz sequence for a positive integer', function(){
    expect(collatzConjecture(1)).to.deep.equal([1])
    expect(collatzConjecture(7)).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    expect(collatzConjecture(3)).to.deep.equal([3, 10, 5, 16, 8, 4, 2, 1])
  })

  it('returns undefined for negative numbers, zero, and non-numbers', function(){
    expect(collatzConjecture('string')).to.be.undefined
    expect(collatzConjecture(-5)).to.be.undefined
    expect(collatzConjecture(0)).to.be.undefined
  })
})
