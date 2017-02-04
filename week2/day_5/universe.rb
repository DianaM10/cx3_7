require_relative('ruby_play')

class universe
  def initialize
    @sol = Solarsystem.new('planets')
  end

  def eat_planets

    @sol.collase()
  end

end

uni = Universe.new()
uni.eat_planets()