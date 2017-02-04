class TeachersController < ApplicationController

  def index
    teachers = Teacher.all
    render :json => teachers.as_json({
            include: :students
      })
  end

  def show
    teachers = Teachers.find( params[:id] )
    render :json => teachers
  end

end