class FoodsController < ApplicationController
  def search
    render json: recipes
  end

  def fetch_recipes_from_rakuten
    # ここで楽天apiクライアントクラスを呼ぶ
  end

  private
end
