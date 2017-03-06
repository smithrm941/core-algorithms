import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome(input)', function(){
  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true if input is palindrome', function(){
    expect(isPalindrome('racecar')).to.deep.equal(true)
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.deep.equal(true)
    expect(isPalindrome('"Are _we_ not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—-a prisoner up to new era."')).to.deep.equal(true)
  })

  it('returns false if input is not palindrome', function(){
    expect(isPalindrome('lemon')).to.deep.equal(false)
  })

  it('should return error message if argument is not a string', function(){
    expect(isPalindrome([1, 2, 3])).to.equal('Invalid input')
    expect(isPalindrome(1)).to.equal('Invalid input')
  })
})
