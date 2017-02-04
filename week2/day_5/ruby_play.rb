class SolarSysytem

attr_reader :planets

def initialize(input_planets)   #initialze -function within a class, in brackets is parameters
  @planets = input_planets    #@planets makes it an instant variable
end




end


sol = SolarSysytem.new (["Earth","Mars"])   #this makes a new solar system,we need to pass some planets in brackets, which are arguments

another_sol = SolarSysytem.new(['Venus', 'Jupiter'])
 puts sol.planets
 puts another_sol.planets