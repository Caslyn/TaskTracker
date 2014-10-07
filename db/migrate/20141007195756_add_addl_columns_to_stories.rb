class AddAddlColumnsToStories < ActiveRecord::Migration
  def change
   	add_column :stories, :state, :integer, default: 0
  end
end
