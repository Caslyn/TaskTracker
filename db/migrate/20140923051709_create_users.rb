class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email, null: false
      t.string :password_digest
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :session_token
  end
end
