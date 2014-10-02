CREATE TABLE "projects" ("id" serial primary key, "title" character varying(255) NOT NULL, "description" character varying(255), "user_id" integer, "created_at" timestamp, "updated_at" timestamp) ;
CREATE  INDEX  "index_projects_on_user_id" ON "projects"  ("user_id");
INSERT INTO schema_migrations (version) VALUES (20140923204714);
