CREATE TABLE "chefs" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "avatar_url" text,
  "created_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "recipes" (
  "id" SERIAL PRIMARY KEY,
  "chef_id" int,
  "image" text,
  "title" text NOT NULL,
  "ingredients" text NOT NULL,
  "preparation" text NOT NULL,
  "information" text,
  "created_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "files" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "path" text NOT NULL,
  "recipes_id" int
);

ALTER TABLE "recipes" ADD FOREIGN KEY ("chef_id") REFERENCES "chefs" ("id");

ALTER TABLE "files" ADD FOREIGN KEY ("recipes_id") REFERENCES "recipes" ("id");
