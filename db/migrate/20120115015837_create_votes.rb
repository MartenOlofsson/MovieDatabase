class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :grade
      t.string :voter
      t.integer :movie_id
      t.timestamps
    end
  end
end
