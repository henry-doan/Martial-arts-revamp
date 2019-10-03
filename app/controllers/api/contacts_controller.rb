class Api::ContactsController < ApplicationController
end
    render json: Contact.all
  end

  def create 
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact
    else
      render json: { errors: @contact.errors }, status: :unprocessable_entity
    end
  end

  def update
    @contact = Contact.find(params[:id])
    if @contact.update(contact_params)
      render json: @contact
    else
      render json: { errors: @contact.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Contact.find(params[:id]).destroy
    render json: { message: 'contact deleted' }
  end

  private
    def contact_params
      # {post: { title: 'food', body: 'yummy'}}
      # { post: {title: '', body: ''} }
      params.require(:contact).permit(:name, :email, :phone, :interest, :notes)
      
    end
end
