class State < ApplicationRecord
  has_many :routes, dependent: :destroy
end
