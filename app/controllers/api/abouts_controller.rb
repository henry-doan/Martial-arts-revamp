class Api::AboutsController < ApplicationController
  def index 
    render json: Content.all
  end

  def create 
    @content = Content.new(content_params)
    if @content.save
      render json: @content
    else
      render json: { errors: @content.errors }, status: :unprocessable_entity
    end
  end

  def update
    @content = Content.find(params[:id])
    if @content.update(content_params)
      render json: @content
    else
      render json: { errors: @content.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Content.find(params[:id]).destroy
    render json: { message: 'content deleted' }
  end

  private
    def crud_params
      # {post: { title: 'food', body: 'yummy'}}
      # { post: {title: '', body: ''} }
      params.require(:crud).permit(:title, :body)
    end
end