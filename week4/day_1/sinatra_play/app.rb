require( 'sinatra')
require( 'sinatra/contrib/all') #this saves you from restarting the server each time to see changes you make. it does it for you

get '/hi' do
  "<h1>Hello world!<h1>"
end

get '/roll_die' do
  "Rolling the die ...#{rand(1..6)}"
  
  end

#lets you pass in variable to the url ie mister/mrs etc
get '/name/:title' do
  "Your title is #{params[:title]}"
end

#lets you pass in 2 things in to url to display
get '/name/:first_name/:last_name' do
  puts params #puts to the terminal
  "Your name is #{params[:first_name]} #{params[:last_name]}"
  end

  get '/square/:num' do
    num = params[:num].to_i
    "number square = #{num * num}"
  end

