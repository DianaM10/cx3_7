require_relative("../db/sql_runner")

class MagicalItem

  attr_reader :id, :name

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']

  end

  def save()
    sql = "INSERT INTO magical_items ( name) VALUES ('#{@name}') RETURNING *"
    magical_item = SqlRunner.run(sql).first
    @id = magical_item['id'].to_i

  end


end