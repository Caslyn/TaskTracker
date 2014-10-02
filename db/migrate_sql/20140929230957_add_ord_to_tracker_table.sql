ALTER TABLE "trackers" ADD COLUMN "ord" float;
INSERT INTO schema_migrations (version) VALUES (20140929230957);
