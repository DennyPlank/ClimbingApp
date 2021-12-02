class Api::RoutesController < ApplicationController
 
  
  private
  def routes_params
    params.require(:routes).permit(:grade, :length)
  end
  
  def set_state
    @state = State.find(params[:state_id])
  end

  def set_route
    @route = @state.routes.find(params[:id])
  end


end
