-- Up Migration
ALTER TABLE groceries ADD COLUMN IF NOT EXISTS "size" smallint NOT NULL DEFAULT 0;

UPDATE groceries
	SET "size"=2
	WHERE id=1;
UPDATE groceries
	SET "size"=3
	WHERE id=2;
UPDATE groceries
	SET "size"=2
	WHERE id=3;
UPDATE groceries
	SET "size"=2
	WHERE id=4;
UPDATE groceries
	SET "size"=2
	WHERE id=5;
UPDATE groceries
	SET "size"=2
	WHERE id=6;
UPDATE groceries
	SET "size"=2
	WHERE id=7;
UPDATE groceries
	SET "size"=2
	WHERE id=8;
UPDATE groceries
	SET "size"=1
	WHERE id=9;
UPDATE groceries
	SET "size"=2
	WHERE id=10;
UPDATE groceries
	SET "size"=2
	WHERE id=11;
UPDATE groceries
	SET "size"=2
	WHERE id=12;
UPDATE groceries
	SET "size"=2
	WHERE id=13;
UPDATE groceries
	SET "size"=1
	WHERE id=14;
UPDATE groceries
	SET "size"=3
	WHERE id=15;
UPDATE groceries
	SET "size"=2
	WHERE id=16;
UPDATE groceries
	SET "size"=2
	WHERE id=17;
UPDATE groceries
	SET "size"=2
	WHERE id=18;
UPDATE groceries
	SET "size"=2
	WHERE id=19;
UPDATE groceries
	SET "size"=2
	WHERE id=20;
UPDATE groceries
	SET "size"=2
	WHERE id=21;
UPDATE groceries
	SET "size"=1
	WHERE id=22;
UPDATE groceries
	SET "size"=1
	WHERE id=23;
UPDATE groceries
	SET "size"=2
	WHERE id=24;
UPDATE groceries
	SET "size"=2
	WHERE id=25;
UPDATE groceries
	SET "size"=2
	WHERE id=26;
UPDATE groceries
	SET "size"=2
	WHERE id=27;
UPDATE groceries
	SET "size"=2
	WHERE id=28;
UPDATE groceries
	SET "size"=1
	WHERE id=29;

ALTER TABLE groceries ALTER COLUMN "size" DROP DEFAULT;

-- Down Migration
