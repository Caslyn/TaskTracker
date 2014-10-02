CREATE TABLE "trackers" ("id" serial primary key, "title" character varying(255) NOT NULL, "project_id" integer, "created_at" timestamp, "updated_at" timestamp) ;
CREATE  INDEX  "index_trackers_on_project_id" ON "trackers"  ("project_id");
INSERT INTO schema_migrations (version) VALUES (20140926135730);
