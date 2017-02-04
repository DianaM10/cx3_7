require_relative('minitest/autorun')

class Agent < Person

  def talk
    name = super()
    return "The names #{last_name}, #{name}."
  end
  
end