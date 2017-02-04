require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end

  def pet_type(name)
    pet_with_name = @pets.find do |pet| 
      pet.name() == name
    end
    return pet_with_name.type
  end

def get_names_of_all_pets_of_type(type)
  pets_of_type = @pets.select do |pet|
    pet.type() == type
  end
  return pets_of_type.map do |pet|
    pet.name() 
  end
end

def get_number_of_pets_costing_at_least(amount)
  pets_cost = @pets.select do |pet|
    pet.price() >= amount
  end
  return pets_cost.count

  end




end