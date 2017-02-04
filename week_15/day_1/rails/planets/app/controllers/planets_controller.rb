class PlanetsController < ApplicationController

  def index
    @planets = [{name: 'mercury'}, {name: 'venus'}, {name: 'earth'}, {name: 'mars'}, {name: 'jupiter'}, {name: 'saturn'}, {name: 'uranus'}, {name: 'neptune'}]
    render :json => @planets
  end

end