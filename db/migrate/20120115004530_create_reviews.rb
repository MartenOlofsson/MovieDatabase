class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :author
      t.text :review
      t.integer :movie_id

      t.timestamps
    end
  end
end
