class Api::StatesController < ApplicationController
  before_action :set_state, only: [:show, :destroy, :update]
  def index 
    render json: State.all
  end

  def show
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private
  
  def set_params 
    params.require(:state).permit(:name, :heatIndex)
  end
  
  
  def set_state
  @state = State.find(params[:id])
  end

end
