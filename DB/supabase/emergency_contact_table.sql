-- drop table if exists emergency_contact;
create table emergency_contact
(
  id bigint primary key generated always as identity,
  associated_user_id int,
  first_name varchar(120) not null,
  last_name varchar(120) not null,
  email_address varchar(120) not null,
  phone_number char(10) null,
  parent boolean null default false,
  spouse boolean null default false,
  relative boolean null default false,
  significant_other boolean null default false,
  guardian boolean null default false,
  personal_acquaintance boolean null default false,
  foreign key(associated_user_id) references person(id) on delete cascade,
  unique(email_address, phone_number)
);
