require_relative("../db/sql_runner")

class Pokemon 

  attr_reader( :id, :name )

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']
  end

  def trainers()
    sql = "SELECT trainers.* FROM trainers INNER JOIN ownedpokemons ON ownedpokemons.trainer_id = trainers.id WHERE pokemon_id = #{@id};"
    return Trainer.map_items( sql )
  end


  def save()
    sql = "INSERT INTO pokemons (name) VALUES ('#{ @name }') RETURNING *"
    pokemon = SqlRunner.run( sql ).first
    @id = pokemon['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM pokemons"
    return Pokemon.map_items( sql )
  end

  def self.delete_all() 
    sql = "DELETE FROM pokemons"
    SqlRunner.run(sql)
  end

  def self.map_items(sql)
    pokemons = SqlRunner.run(sql)
    result = pokemons.map { |pokemon| Pokemon.new( pokemon ) }
    return result
  end

  def self.map_item(sql)
    result = Pokemon.map_items( sql )
    return result.first
  end

end