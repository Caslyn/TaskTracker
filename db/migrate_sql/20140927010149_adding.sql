ALTER TABLE "trackers" ADD COLUMN "visible" boolean DEFAULT 't';
INSERT INTO schema_migrations (version) VALUES (20140927010149);
