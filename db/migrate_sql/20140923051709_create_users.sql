CREATE TABLE "users" ("id" serial primary key, "name" character varying(255), "email" character varying(255) NOT NULL, "password_digest" character varying(255), "session_token" character varying(255) NOT NULL, "created_at" timestamp, "updated_at" timestamp) ;
CREATE  INDEX  "index_users_on_session_token" ON "users"  ("session_token");
INSERT INTO schema_migrations (version) VALUES (20140923051709);
