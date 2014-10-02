CREATE TABLE "stories" ("id" serial primary key, "title" character varying(255) NOT NULL, "description" text, "tracker_id" integer, "ord" float, "created_at" timestamp, "updated_at" timestamp) ;
CREATE  INDEX  "index_stories_on_tracker_id" ON "stories"  ("tracker_id");
INSERT INTO schema_migrations (version) VALUES (20140926194034);
