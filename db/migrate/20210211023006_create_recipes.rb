class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name, index: true, null: false
      t.string :image_url
      t.string :rakuten_url, null: false
      t.string :rakuten_recipe_id, index: true, null: false
      t.text :description
      t.text :material, index: true

      t.timestamps
    end
  end
end
