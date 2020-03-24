class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :datetime
      t.string :location
      t.integer :tickets

      t.timestamps
    end
  end
end
