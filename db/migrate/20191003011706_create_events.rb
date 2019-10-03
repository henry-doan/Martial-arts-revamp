class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :start_date
      t.string :start_time
      t.string :end_date
      t.string :end_time
      t.string :title
      t.text :description
      t.string :slug_link
      t.string :flyer
      t.string :instructor

      t.timestamps
    end
  end
end
