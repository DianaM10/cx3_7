require_relative('person')

class Medic < Person

  def heal
    return "I'm a healer"
  end

  def talk
    return "#{@first_name} #{@last_name}"
  end
end