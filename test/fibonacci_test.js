import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){
  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('returns fibonacci sequence to nth position', function(){
    expect(fibonacci(1)).to.deep.equal([0])
    expect(fibonacci(2)).to.deep.equal([0, 1])
    expect(fibonacci(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    expect(fibonacci(5)).to.deep.equal([0, 1, 1, 2, 3])
  })

  it('does not work with non-numbers, zero, or negative numbers', function(){
    expect(fibonacci('string')).to.be.undefined
    expect(fibonacci(0)).to.be.undefined
    expect(fibonacci(-5)).to.be.undefined
  })
})
