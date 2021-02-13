class FoodsController < ApplicationController
  before_action :set_food, only: [:destroy, :get_recipes]

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
    @food.destroy
  end

  def get_recipes
    category_id = @food.get_category_id
    recipes = RakutenRecipeApiClient.get_recipes(category_id) if category_id
    render json: recipes
  end

  private

  def food_params
    params.require(:food).permit(:name)
  end

  def set_food
    id = params[:id] || params[:food_id]
    @food = Food.find(id)
  end
end
