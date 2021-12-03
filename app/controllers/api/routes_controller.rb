class Api::RoutesController < ApplicationController
  before_action :set_state 
  
  def index
  render json: @state.routes.all
  end
  
  private
  def routes_params
    params.require(:routes).permit(:grade, :length, :name)
  end
  
  def set_state
    @state = State.find(params[:state_id])
  end

  def set_route
    @route = @state.routes.find(params[:id])
  end


end
