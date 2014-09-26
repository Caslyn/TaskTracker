class CreateTrackers < ActiveRecord::Migration
  def change
    create_table :trackers do |t|
    	t.string :title, null: false
    	t.integer :project_id, null: false
      t.timestamps
    end
    add_index :trackers, :project_id
  end
end
