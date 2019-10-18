class Api::InstructorsController < ApplicationController

    def index
        render json: Instructor.all
    end

    def create
        @instructor = Instructor.new(instructor_params)
        if @instructor.save
            render json: @instructor
        else
            render json: {errors: @instructor.errors}, status: :unprocessable_entity
        end
    end

    def update
        @instructor = Instructor.find(params[:id])
        if @instructor.update(instructor_params)
            render json: @instructor
        else
            render json: {errors: @instructor.errors}, status: :unprocessable_entity
        end 
    end

    def destroy
        Instructor.find(params[:id]).destroy
        render json: {message: 'instructor deleted'}
    end

    private
    def instructor_params
        params.require(:instructor).permit(:first_name, :last_name, :specialty, :years, 
        :experience, :sm_facebook, :sm_linkedin, :sm_twitter, :sm_instagram, :sm_youtube, :bio, :image)
    end

end
