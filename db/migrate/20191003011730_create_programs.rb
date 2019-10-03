class CreatePrograms < ActiveRecord::Migration[6.0]
  def change
    create_table :programs do |t|
      t.string :title
      t.text :description
      t.string :image
      t.boolean :featured_boolean
      t.string :gallery

      t.timestamps
    end
  end
end
