CREATE TABLE "project_memberships" ("id" serial primary key, "user_id" integer NOT NULL, "project_id" integer NOT NULL, "created_at" timestamp, "updated_at" timestamp) ;
CREATE UNIQUE INDEX  "index_project_memberships_on_user_id_and_project_id" ON "project_memberships"  ("user_id", "project_id");
INSERT INTO schema_migrations (version) VALUES (20140926134911);
