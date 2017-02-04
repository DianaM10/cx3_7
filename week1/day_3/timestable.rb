timestable = 1
timestable_end = 10

while (timestable <= timestable_end)
  puts "#{timestable} timestable"
number = 1
number_limit = 10

while (number <= number_limit)
   puts timestable*number
  number += 1
  end

    timestable += 1
    
  end


  # limit = 10
  # number = 1

  # while (number <= limit)
  #   multiplier = 1
  #   while (multiplier <= limit)
  #     result = number * multiplier
  #     print "#{result}"
  #     multiplier += 1
  #   end
  #   puts
  #   number += 1
  # end

  # while (true) do
  #   puts "type something"
  #   line = gets.chomp
  #   break if (line.downcase == 'q')
  #   puts "you typed #{line}"
  # end

  # while (true) do
  #   puts "type yes or no"
  #   line = gets.chomp
  #   break if (line.downcase == 'yes' || line.downcase == 'no')
  #   puts "That was not a yes or no you numpty"
  # end