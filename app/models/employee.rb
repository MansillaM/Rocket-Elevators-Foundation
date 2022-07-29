class Employee < ApplicationRecord
  belongs_to :user, class_name: "User", foreign_key: "user_id"
  has_many :battery, class_name: "Battery", foreign_key: "employee_id"
  has_many :interventions, class_name: "Intervention", foreign_key: "intervention_id"
end
