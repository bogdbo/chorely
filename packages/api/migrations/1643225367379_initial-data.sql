-- Up Migration
insert into organisations(name, created_at_utc)
values ('Homely home', CURRENT_TIMESTAMP);

insert into tasks( title, frequency, preferred_time, organisation_id)
values ('๐ฎ Take out bins',          null, null, 1), -- 1
       ('๐ฝ๏ธ Wash loose dishes',      null, null, 1), -- 2
       ('๐ณ Tidy after cooking',     null, null, 1), -- 3
       ('๐งบ Washy clothes',         null, null, 1), -- 4
       ('โจ Wipe surfaces',          null, null, 1), -- 5
       ('๐ฝ๏ธ Start dishwasher',       null, null, 1), -- 6
       ('๐ฉ Clean morning truffles', 24,   9,    1), -- 7
       ('๐ฝ๏ธ Empty the dishwasher',   null, null, 1), -- 8
       ('๐งน Hoover bedroom',        168,  21,   1), -- 9
       ('๐ท Empty hoover',           null, null, 1), -- 10
       ('๐๏ธ Make bed',               24,   10,   1), -- 11
       ('๐ Refill bun-bun water',   null, null, 1), -- 12
       ('๐ฐ Brushy brushy bunnies',  168,  21,   1), -- 13
       ('๐ Clean litter trays',     96,   21,   1), -- 14
       ('๐พ Refill hay hay hay',     null, null, 1), -- 15
       ('๐ฝ Empty bathroom bin',     null, null, 1), -- 16
       ('๐งน Hoover around house',   72,   21,   1); -- 17

insert into users(name, email, created_at_utc, is_admin, rota_order, organisation_id)
values ('User1', 'replace1@gmail.com', CURRENT_TIMESTAMP, true, 0, 1),
       ('User2', 'replace2@gmail.com', CURRENT_TIMESTAMP, true, 1, 1);

insert into assignments(task_id, assigned_to_user_id, due_by_utc, assigned_by_user_id, assigned_at_utc)
values (1, 1, null, null, current_timestamp),
       (2, 2, null, null, current_timestamp),
       (3, 2, null, null, current_timestamp),
       (4, 1, null, null, current_timestamp),
       (5, 1, null, null, current_timestamp),
       (6, 1, null, null, current_timestamp),
       (7, 2, null, null, current_timestamp),
       (8, 2, null, null, current_timestamp),
       (9, 2, null, null, current_timestamp),
       (10, 1, null, null, current_timestamp),
       (11, 2, null, null, current_timestamp),
       (12, 1, null, null, current_timestamp),
       (13, 2, null, null, current_timestamp),
       (14, 1, null, null, current_timestamp),
       (15, 1, null, null, current_timestamp),
       (16, 1, null, null, current_timestamp),
       (17, 2, null, null, current_timestamp);
-- Down Migration
