require('minitest/autorun')
require('minitest/rg')
require_relative('../turtles')

class TestNinjaTurtle < Minitest::Test

  def test_get_turtle_name 
    turtles = NinjaTurtle.new("Michaelangelo", "nunchucks", "orange")
    assert_equal("Michaelangelo", turtles.turtle_name)
  end

  def test_get_turtle_weapon
    turtles = NinjaTurtle.new("Michaelangelo", "nunchucks", "orange")
    assert_equal("nunchucks", turtles.weapon)
  end

  def test_likes_pizza
    turtles = NinjaTurtle.new("Michaelangelo", "nunchucks", "orange")
    assert_equal("Michaelangelo loves pizza", turtles.likes_pizza)
  end


end