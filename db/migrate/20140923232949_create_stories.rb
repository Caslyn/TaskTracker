class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
    	t.string :title, null: false
    	t.integer :project_id, null: false
    	t.text :description
    	t.integer :tracker, null: false
    	t.float :ord, default: 0

      t.timestamps
    end
    add_index :stories, :project_id
  end
end
