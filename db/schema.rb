# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140930194201) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "project_memberships", force: true do |t|
    t.integer  "user_id",    null: false
    t.integer  "project_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "project_memberships", ["user_id", "project_id"], name: "index_project_memberships_on_user_id_and_project_id", unique: true, using: :btree

  create_table "projects", force: true do |t|
    t.string   "title",       null: false
    t.string   "description"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "projects", ["user_id"], name: "index_projects_on_user_id", using: :btree

  create_table "stories", force: true do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.integer  "tracker_id"
    t.float    "ord"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "points"
    t.string   "story_type"
  end

  add_index "stories", ["tracker_id"], name: "index_stories_on_tracker_id", using: :btree

  create_table "trackers", force: true do |t|
    t.string   "title",                     null: false
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "visible",    default: true
    t.float    "ord"
  end

  add_index "trackers", ["project_id"], name: "index_trackers_on_project_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email",           null: false
    t.string   "password_digest"
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
