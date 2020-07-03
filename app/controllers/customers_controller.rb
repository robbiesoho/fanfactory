class CustomersController < ApplicationController
  before_action :logged_in_user

  def index
    @customer = Customer.all
  end

  def show
    @customer = Customer.find(params[:id])
  end

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      flash[:success] = "customer added!"
      redirect_to customers_url
    else
      render 'new'
    end
  end

  def edit
    @customer = Customer.find(params[:id])
  end

  def update
    @customer = Customer.find(params[:id])
    if @customer.update_attributes(customer_params)
      flash[:success] = "customer updated"
      redirect_to @customer
    else
      render 'addcustomer'
    end
  end

  def destroy
    Customer.find(params[:id]).destroy
    flash[:success] = "Customer deleted"
    redirect_to customers_url
  end


  private

  def customer_params
    params.require(:customer).permit(:name, :email, :phone)
  end
  
end
