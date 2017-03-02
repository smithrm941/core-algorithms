import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){
  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('should return the intersection of two sets', function(){
    expect(setIntersection([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([2, 4])
    expect(setIntersection([1], [2])).to.deep.equal([])
    expect(setIntersection([1, 3], [6, 8])).to.deep.equal([])
    expect(setIntersection([1, 2], [1, 2])).to.deep.equal([1, 2])
  })

  it('should return error message if any argument is not a set', function(){
    expect(setIntersection(1, 'z')).to.equal('One or more inputs invalid')
    expect(setIntersection([1, 2, 3], 1)).to.equal('One or more inputs invalid')
  })
})
