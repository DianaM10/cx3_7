require_relative( '../db/sql_runner' )

class Artist

  attr_reader :id, :name

  def initialize(options)
    @id = options['id'].to_i if options['id'] != nil
    @name = options['name']
  end

  def save
    sql = "INSERT INTO artists (name) VALUES ('#{@name}') RETURNING *"
    artist = SqlRunner.run(sql).first
    @id = artist['id'].to_i
    # results_array = SqlRunner.run(sql)
    # artist_hash = results_array.first
    # @id = artist_hash['id'].to_i
  end

  def albums
    sql = "SELECT * FROM albums WHERE artist_id = #{id};"
    album_hashes = SqlRunner.run(sql)
    # album_objects = []
    # for hash in album_hashes
    #   album = Album.new(hash)
    #   album_objects.push( album )
    # end
    albums = album_hashes.map() do |hash| 
      Album.new(hash)
    end
    # albums = album_hashes.map { |album| Album.new(album)}
    return albums
  end

end


