import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', function(){
  it('should be a function', function(){
    expect(setCompliment).to.be.a('function')
  })

  it('should return an array of values that are in b but not in a', function(){
    expect(setCompliment([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([6,8])
    expect(setCompliment([2, 4, 6, 8], [2, 4, 6, 8])).to.deep.equal([])
    expect(setCompliment([1, 2, 3], [])).to.deep.equal([])
    expect(setCompliment([], [1, 2, 3])).to.deep.equal([1, 2, 3])
  })

  it('should return error message if any argument is not a set', function(){
    expect(setCompliment(1, 'z')).to.equal('One or more inputs invalid')
    expect(setCompliment([1, 2, 3], 1)).to.equal('One or more inputs invalid')
  })

})
