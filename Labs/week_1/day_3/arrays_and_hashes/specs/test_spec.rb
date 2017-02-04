require( 'minitest/autorun' )
require( 'minitest/pride' )
require_relative( '../array_and_hashes_functions' )
class ArrayAndHashesTest < MiniTest::Test

  def test_price_cost()
    price_test = price_cost()
    assert_equal( 8, price_test)
  end


def test_array_sum()
  array_test = array_sum()
    assert_equal( 15, array_test)
  end

def test_find_item()
  hogwarts = [ 'Hufflepuff', 'Slytherin', 'Gryffindor', 'Ravenclaw' ]
  example1 = "Ravenclaw"
  example2 = "Batman"
   first_return_is_found = find_item?(hogwarts, example1)
second_return_is_found = find_item?(hogwarts, example2)
  assert_equal( true, first_return_is_found)
  assert_equal( false, second_return_is_found)
end
  end