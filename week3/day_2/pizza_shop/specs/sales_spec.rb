require('minitest/autorun')
require_relative('../models/sales')
require_relative('../models/pizza_order')

class TestSales < MiniTest::Test

  def setup
    orders = PizzaOrder.all
    @sales = Sales.new(orders)
  end

  def test_total_revenue
    result = @sales.total_revenue
    assert_equal(10, result)
  end

end