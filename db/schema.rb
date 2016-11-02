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

ActiveRecord::Schema.define(version: 20161102213946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer  "hd_id"
    t.string   "sku"
    t.string   "category"
    t.text     "description"
    t.text     "bullets",           default: [],              array: true
    t.jsonb    "specifications",    default: {}
    t.text     "image_urls",        default: [],              array: true
    t.string   "installation_url"
    t.string   "specification_url"
    t.string   "warranty_url"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.string   "title"
    t.string   "source_url"
    t.jsonb    "functional_vars"
    t.string   "price"
    t.string   "sale_price"
    t.index ["hd_id"], name: "index_listings_on_hd_id", unique: true, using: :btree
  end

  create_table "pages", force: :cascade do |t|
    t.string   "title"
    t.json     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "spider_id"
  end

  create_table "spiders", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "style"
    t.json     "instructions"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.text     "entry_point"
  end

end
