require_relative("../db/sql_runner")

class Wizard

  attr_reader( :id, :name )

  def initialize( options )
    @id = options['id'].to_i if options['id'] != nil
    @name = options['name']

  end

  def save()
    sql = "INSERT INTO wizards (name) VALUES ('#{@name}') RETURNING *"
    wizard = SqlRunner.run(sql).first
    @id = wizard['id'].to_i

  end


end