class Vote < ActiveRecord::Base
  belongs_to :movie

  attr_accessible :voter, :grade

  validates_presence_of :voter, :grade
end
