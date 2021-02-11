class Food < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  def get_category_id
    Food::CategoryId::Mapping[name]
  end
end
