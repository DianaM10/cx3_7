sets = 1
sets_limit = 4

while (sets <= sets_limit) #outer loop
  puts "Set: #{sets}"

  reps = 1
  reps_limit = 12

  while (reps <= reps_limit) #inner loop
    puts "Rep: #{reps}"
    reps += 1
  end

  sets += 1
  puts "Have a rest!"
end

puts "Well done!"




