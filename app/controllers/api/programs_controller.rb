class Api::ProgramsController < ApplicationController

    def index
        render json: Program.all
    end

    def create
        @program = Program.new(program_params)
        if @program.save
            render json: @program
        else
            render json: {errors: @program.errors }, status: :unprocessable_entity
        end
    end

    def update
        @program = Program.find(params[:id])
        if @program.update(program_params)
            render json: @program_params
        else
            render json: {errors: @program.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        Program.find(params[:id]).destroy
        render json: {message: 'Program deleted'}
    end

    private
    def program_params
    params.require(:program).permit(:title, :description, :image, :featured_boolean, :gallery )
    end

end
