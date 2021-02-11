class FoodsController < ApplicationController
  def search
    render json: recipes
  end

  private
end
