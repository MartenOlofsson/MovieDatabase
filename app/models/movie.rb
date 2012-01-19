class Movie < ActiveRecord::Base
  has_many :reviews
  has_many :votes


  attr_accessible :title, :image, :description
  validates :title, :description, :presence=> true

  mount_uploader :image, ImageUploader



  cattr_reader :per_page
    @@per_page = 3


end
