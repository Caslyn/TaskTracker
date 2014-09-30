class AddMoreColsToStoryTable < ActiveRecord::Migration
  def change
  	add_column :stories, :points, :float
  	add_column :stories, :type, :string
  	add_column :stories, :tasks, :string
  end
end
