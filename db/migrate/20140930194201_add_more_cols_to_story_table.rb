class AddMoreColsToStoryTable < ActiveRecord::Migration
  def change
  	add_column :stories, :points, :integer
  	add_column :stories, :story_type, :string
  end
end
