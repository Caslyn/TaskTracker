ALTER TABLE "stories" ADD COLUMN "points" integer;
ALTER TABLE "stories" ADD COLUMN "story_type" character varying(255);
INSERT INTO schema_migrations (version) VALUES (20140930194201);
