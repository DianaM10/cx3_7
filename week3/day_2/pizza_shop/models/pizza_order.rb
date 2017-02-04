require('pry-byebug')
require('pg')

class PizzaOrder

attr_reader :first_name, :last_name, :topping, :quantity

# the options parameter is a hash
def initialize(options)
@id = options['id'].to_i if options['id']
@first_name = options['first_name']
@last_name = options['last_name']
@topping = options['topping']
@quantity = options['quantity'].to_i
end

def save
    db = PG.connect({dbname: 'pizza_shop', host: 'localhost'})   #set connection to database
    sql ="INSERT INTO pizza_orders(
      first_name,
      last_name,
      topping,
      quantity) VALUES(
      '#{@first_name}', 
      '#{@last_name}',
      '#{@topping}',
      #{@quantity}      
    );"  #quantity does not require quotes as it is an int
    db.exec(sql)
    db.close

end

  #class method to get all pizza orders
def self.all 
  db = PG.connect({dbname: 'pizza_shop', host: 'localhost'})
  sql = "SELECT * FROM pizza_orders;"
  orders = db.exec(sql)
  db.close
  objects = orders.map{ |order| PizzaOrder.new(order) }
  return objects
end

def self.find
    db = PG.connect({dbname: 'pizza_shop', host: 'localhost'})
    sql = "SELECT * FROM pizza_orders WHERE id = #{id};"
    orders = db.exec(sql)
    db.close()
    return PizzaOrder.new( order.first() ) 
  end

def update
  db = PG.connect({dbname: 'pizza_shop', host: 'localhost'}) 
  sql ="UPDATE pizza_orders SET
    first_name = '#{@first_name}'
    last_name = '#{@last_name}'
    topping = '#{@topping}'
    quantity = #{@quantity}
    WHERE id = #{@id};" 
  db.exec(sql)
  db.close
end

def delete
  db = PG.connect({dbname: 'pizza_shop', host: 'localhost'})
  sql = "DELETE FROM pizza_orders WHERE id = #{@id}"
  db.exec( sql )
  db.close()
end


end

order2 = PizzaOrder.new({'first_name' => "Darth", 'last_name' => "Vader", 'topping' => 'Hawiian', 'quantity' => 7 })
order2.save
order2.quantity = 10
order2.update

binding.pry
nil