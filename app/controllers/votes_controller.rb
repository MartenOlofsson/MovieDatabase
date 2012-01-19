class VotesController < ApplicationController
  def index
  end

  def create
    @movie = Movie.find(params[:movie_id])
    @vote = @movie.votes.create(params[:vote])
    redirect_to movie_path(@movie)

  end
end
