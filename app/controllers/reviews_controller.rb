class ReviewsController < ApplicationController
  def index
  end


  def new
    @review = Movie.Review.new

    @movie = Movie.find(params[:movie_id])

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @review }

    end
  end
 def create
    @movie = Movie.find(params[:movie_id])
    @review = @movie.reviews.create(params[:review])
    redirect_to movie_path(@movie)
  end

end
