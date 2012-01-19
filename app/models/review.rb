class Review < ActiveRecord::Base
  belongs_to :movie

  attr_accessible :author, :review
  validates :author, :review, :presence=> true
  validates_length_of :review, :minimum => 10
end
