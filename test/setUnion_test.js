import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){
  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('should return the union of two sets', function(){
    expect(setUnion([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 2, 3, 4, 6, 8])
    expect(setUnion([0], [0])).to.deep.equal([0])
    expect(setUnion(['dog', 'cat', 'cow', 'panda'], ['horse', 'cat', 'panda', 'rock'])).to.deep.equal(['dog', 'cat', 'cow', 'panda', 'horse', 'rock'])
  })

  it('should return undefined if any argument is not a set', function(){
    expect(setUnion(1, 'z')).to.equal('One or more inputs invalid')
  })
})
