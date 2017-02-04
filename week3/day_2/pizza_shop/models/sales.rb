require_relative('pizza_order')

class Sales

  def initialize(orders)
    @orders = orders
  end

  def total_revenue
    revenue = 0
    @orders.each { |order| revenue += order.quantity * 10 } 
    return revenue 
  end

 #   total_quantity= @orders.reduce(0) { |total, order| total + order.quantity}
 #   return total_quantity*10
 # end
  
end