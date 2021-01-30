class FoodsController < ApplicationController
  def index
    foods = Food.all
    render json: foods
  end

  def create
    food = Food.new(food_params)
    if food.save
      render json: food
    else
      render json: { error_message: food.errors.full_messages }
    end
  end

  def destroy
    food = Food.find(params[:id])
    food.destroy
  end

  private

  def food_params
    params.require(:food).permit(:name)
  end
end
