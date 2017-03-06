import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){
  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  it('should return an array of the same values but sorted', function(){
    expect(bubbleSort([9, 7, 10, 3, 5])).to.deep.equal([3, 5, 7, 9, 10])
    expect(bubbleSort([1])).to.deep.equal([1])
    expect(bubbleSort([])).to.deep.equal([])
    expect(bubbleSort([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4])
    expect(bubbleSort([9, 52, 4, 91, 19, 64, 3, 3, 52])).to.deep.equal([3, 3, 4, 9, 19, 52, 52, 64, 91])
  })

  it('should return error message if argument is not an array of numbers', function(){
    expect(bubbleSort([1, 2, 3, 4, 'dog'])).to.equal('Please enter an array of numbers')
    expect(bubbleSort('an object')).to.equal('Please enter an array of numbers')
    expect(bubbleSort({animal: 'dog', number: 1})).to.equal('Please enter an array of numbers')
  })

})
