class InterventionsController < ApplicationController
    before_action :set_intervention, only: %i[ show edit update destroy ]

    # def index
    #     @intervention = Intervention.all
    #   end
    
    #   def show
    #   end
    
      def new
        @intervention = Intervention.new
      end
    
    #   def edit
    #   end


    # GET /interventions/customer_buildings
    # param customer_id
    def customer_buildings
      @customer_buildings = Customer.find(params[:customer_id]).buildings
      render plain: @customer_buildings.to_json
    end

    # GET /interventions/building_batteries
    # param building_id
    def building_batteries
      @building_batteries = Building.find(params[:building_id]).batteries
      render plain: @building_batteries.to_json
    end

    # GET /interventions/batterie_columns
    # param batterie_id
    def batterie_columns
      @batterie_columns = Battery.find(params[:battery_id]).columns
      render plain:@batterie_columns.to_json
    end

    # GET /interventions/column_elevators
    # param column_id
    def column_elevators
      @column_elevators = Column.find(params[:column_id]).elevators
      render plain: @column_elevators.to_json
    end
    
    # GET /interventions/elevator_select
    # param elevator_id
    # def elevator_select
    #   render plain: params[:elevator_id]
    # end    

    # GET /interventions/company_employees
    # param employee_id    
    def company_employees
      @company_employees = Employees.find_by(title)
      render plain: @company_employees.to_json
    end   


  def create
    @intervention = Intervention.new(intervention_params)
    respond_to do |format|
        if @intervention.save
        format.html { redirect_to interventions_url(@intervention), notice: "intervention was successfully created." }
        format.json { render :show, status: :created, location: @intervention }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @intervention.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @intervention.update(intervention_params)
        format.html { redirect_to interventions_url(@intervention), notice: "Intervention was successfully updated." }
        format.json { render :show, status: :ok, location: @intervention }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @intervention.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @intervention.destroy

    respond_to do |format|
      format.html { redirect_to interventions_url, notice: "Intervention was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  # private
  # #   # Use callbacks to share common setup or constraints between actions.
    def set_intervention
      @intervention = Intervention.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def intervention_params
      params.require(:intervention).permit(:author, :customer_id, :building_id, :battery_id, :column_id, :elevator_id, :employee_id, :start_date, :end_date, :result, :report, :status)
    end
end
