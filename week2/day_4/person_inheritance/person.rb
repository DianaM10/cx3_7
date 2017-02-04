class Person

  attr_reader :first_name, :last_name

  def initialize(name, last_name)
    @first_name = name
    @last_name = last_name
  end

  # def first_name
  #   return @first_name
  # end

  # def last_name
  #   return @last_name
  # end

  def talk
    return "#{@first_name} #{@last_name}"
  end

end