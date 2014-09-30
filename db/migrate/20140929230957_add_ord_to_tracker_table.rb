class AddOrdToTrackerTable < ActiveRecord::Migration
  def change
  	add_column :trackers, :ord, :float
  end
end
