def price_cost()
  prices = [ 1.23, 6.98, 8.43, 2.45 ]
  costs = [ 4.23, 1.12, 0.52, 8.67 ]
  return prices.length + costs.length
end

def array_sum()
  data = [ 1, 2, 3, 4 ,5 ]
  total = 0
  for num in data
    total += num
  end
  return total
end  

def find_item?(array1, example)
  for item in array1
    if (example == item)
      return true
    end
    return false
end


