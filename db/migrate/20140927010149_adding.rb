class Adding < ActiveRecord::Migration
  def up
  	add_column :trackers, :visible, :boolean, default: true
  end

  def down
  	remove_column :trackers, :visible
  end
end
