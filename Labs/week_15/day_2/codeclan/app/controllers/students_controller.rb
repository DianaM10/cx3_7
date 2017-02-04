class StudentsController < ApplicationController

  def index
    students = Student.all
    render :json => students
  end

  # def show
  #   artist = Artist.find( params[:id] )
  #   render :json => artist
  # end

  



end