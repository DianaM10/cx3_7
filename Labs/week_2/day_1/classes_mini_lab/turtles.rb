class NinjaTurtle

attr_accessor :turtle_name, :weapon, :type

def initialize(name, weapon, colour)
  @turtle_name = name
  @weapon = weapon
  @colour = colour
end

def likes_pizza
  return "#{@turtle_name} loves pizza"
end 
end 