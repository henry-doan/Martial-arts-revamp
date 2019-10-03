class CreateInstructors < ActiveRecord::Migration[6.0]
  def change
    create_table :instructors do |t|
      t.string :first_name
      t.string :last_name
      t.string :specialty
      t.string :years
      t.string :experience
      t.string :sm_facebook
      t.string :sm_linkedin
      t.string :sm_twitter
      t.string :sm_instagram
      t.string :sm_youtube
      t.text :bio
      t.string :image

      t.timestamps
    end
  end
end
