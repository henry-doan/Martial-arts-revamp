class Api::AboutsController < ApplicationController
  def index 
    render json: About.all
  end

  def create 
    @about = About.new(about_params)
    if @about.save
      render json: @about
    else
      render json: { errors: @about.errors }, status: :unprocessable_entity
    end
  end

  def update
    @about = About.find(params[:id])
    if @about.update(about_params)
      render json: @about
    else
      render json: { errors: @about.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    About.find(params[:id]).destroy
    render json: { message: 'content deleted' }
  end

  private
    def about_params
      # {post: { title: 'food', body: 'yummy'}}
      # { post: {title: '', body: ''} }
      params.require(:about).permit(:title, :content, :image)
    end
end
