import { expect } from 'chai'
import symmetricDifference from '../src/symmetricDifference'

describe('symmetricDifference()', function(){

  it('should be a function', function(){
    expect(symmetricDifference).to.be.a('function')
  })

  it('should return an array of unique values in array a plus unique values in array b', function(){
    expect(symmetricDifference([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 3, 6, 8])
    expect(symmetricDifference(['Smallville', 'New York', 'Gotham', 'Atlanta'], ['Boston', 'Detroit', 'New York', 'Atlanta'])).to.deep.equal(['Smallville', 'Gotham', 'Boston', 'Detroit'])
    expect(symmetricDifference([], [1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4])
    expect(symmetricDifference([1, 2, 3, 4], [])).to.deep.equal([1, 2, 3, 4])
    expect(symmetricDifference([],[])).to.deep.equal([])
    expect(symmetricDifference([1, 2, 3, 4], [1, 2, 3, 4])).to.deep.equal([])
  })

  it('should return error message if any argument is not a set', function(){
    expect(symmetricDifference(1, 'z')).to.equal('One or more inputs invalid')
    expect(symmetricDifference([1, 2, 3, 4], 1)).to.equal('One or more inputs invalid')
  })

})
