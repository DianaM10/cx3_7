require_relative("../db/sql_runner")

class OwnedMagicalItem

  attr_reader :id, :wizard_id, :magical_item_id

  def initialize( options )
    @id = options['id'].to_i
    @wizard_id = options['wizard_id'].to_i
    @magical_item_id = options['magical_item_id'].to_i

  end

  def save()
    sql = "INSERT INTO owned_magical_items (wizard_id, magical_item_id) VALUES ( #{@wizard_id}, #{@magical_item_id}) RETURNING *"
    owned_magical_item = SqlRunner.run(sql).first
    @id = owned_magical_item['id'].to_i
  end


end