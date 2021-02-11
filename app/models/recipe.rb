class Recipe < ApplicationRecord
  validates :name, presence: true
  validates :rakuten_url, :rakuten_recipe_id, presence: true, uniqueness: true
end
