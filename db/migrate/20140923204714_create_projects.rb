class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
    	t.string :title, null: false
    	t.string :description
    	t.integer :user_id
      t.timestamps
    end
    add_index :projects, :user_id
  end
end
