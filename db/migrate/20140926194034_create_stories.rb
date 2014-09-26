class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
    	t.string :title, null: false
    	t.text :description
    	t.integer :tracker_id
    	t.float :ord
      t.timestamps
    end
    add_index :stories, :tracker_id
  end
end
