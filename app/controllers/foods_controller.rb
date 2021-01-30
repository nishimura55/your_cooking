class FoodsController < ApplicationController
  def index
    foods_name = Food.all.pluck(:name)
    render json: foods_name
  end

  def create
    food = Food.new(food_params)
    food.save!
  end

  private

  def food_params
    params.require(:food).permit(:name)
  end
end
