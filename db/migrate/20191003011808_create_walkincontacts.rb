class CreateWalkincontacts < ActiveRecord::Migration[6.0]
  def change
    create_table :walkincontacts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :interest
      t.string :notes

      t.timestamps
    end
  end
end
