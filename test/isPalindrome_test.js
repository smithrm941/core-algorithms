import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome(inputString)', function(){
  
  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true if inputString is palindrome', function(){
    expect(isPalindrome('racecar')).to.deep.equal(true)
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.deep.equal(true)
  })

  it('returns false if inputString is not palindrome', function(){
    expect(isPalindrome('lemon')).to.deep.equal(false)
  })
})
