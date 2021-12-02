class Api::StatesController < ApplicationController
  before_action :set_state, only: [:show, :destroy, :update]
  def index 
    render json: State.all
  end

  def show
    render json: @state
  end

  def create
    @fact = Fact.create(state_params)
    if (@fact.save)
      render json: @fact
    else
      # render json: { errors: @fact.errors, x: 1 }, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
    render json: @fact.destroy
  end

  private
  
  def set_params 
    params.require(:state).permit(:name, :heatIndex)
  end
  
  
  def set_state
  @state = State.find(params[:id])
  end

end
