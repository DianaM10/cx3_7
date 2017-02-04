class Wizard

  attr_reader(:name)

  def initialize(name, wand)
    @name = name
    @wand = wand #this is a wand object created separately
  end

  def cast_spell(spell_name)
   return @wand.cast(spell_name)
  end




end