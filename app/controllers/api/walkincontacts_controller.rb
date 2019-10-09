class Api::WalkincontactsController < ApplicationController
  def index 
    render json: Walkincontact.all
  end

  def create 
    @walkincontact = Walkincontact.new(walkincontact_params)
    if @walkincontact.save
      render json: @walkincontact
    else
      render json: { errors: @walkincontact.errors }, status: :unprocessable_entity
    end
  end

  def update
    @walkincontact = Walkincontact.find(params[:id])
    if @walkincontact.update(walkincontact_params)
      render json: @walkincontact
    else
      render json: { errors: @walkincontact.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Walkincontact.find(params[:id]).destroy
    render json: { message: 'walkincontact deleted'}
  end

  private
    def walkincontact_params
      # { walkincontact: {start_date: '', start_time: '', end_date: '', end_time: '', title: '', description: '', flyer: '', instructor: ''} }
      params.require(:walkincontact).permit(:name, :email, :phone, :interest, :notes)
    end
end
