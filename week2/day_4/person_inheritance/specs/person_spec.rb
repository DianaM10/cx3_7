require('minitest/autorun')
require('minitest/rg')
require_relative('../person')

class PersonTest < MiniTest::Test

  def setup
   

    @person = Person.new("Bruce", "Wayne")

  
  end

  def test_person_has_first_name
    assert_equal("Bruce",@person.first_name)
  end

  def test_person_has_last_name
    assert_equal("Wayne",@person.last_name)
  end

end