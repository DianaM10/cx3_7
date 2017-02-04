# # def get_account_name(account)
# #   return account[:holder_name]
# # end  

class BankAccount

  attr_accessor :holder_name, :amount, :type #use this to create below methods instead of writing it all out
  #creates getters and setters

  @@bank_name = "HSBC" #class variable, giving all bank accounts from the same bank. used at top level.

  #below are instance variables

  def initialize(holder_name, amount, type) 
    @holder_name = holder_name
    @amount = amount
    @type = type
  end

  def pay_interest() #brackets can be left out 
      @amount += 10
  end

  # def self.bank_name #self becomes a class method, belongs to bank account class
  #   return @@bank_name
  # end
 def BankAccount.bank_name #can use unstead of self.specd     e
  return @@bank_name
end

#   def holder_name()
#     return @holder_name
#   end

#   def set_holder_name(name)
#     @holder_name = name
#   end

#   def amount
#     return @amount
#   end

#   def type
#     return @type
#   end  




end