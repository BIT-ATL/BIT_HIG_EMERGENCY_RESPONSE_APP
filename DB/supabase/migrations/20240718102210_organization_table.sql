drop table if exists organization;
create table organization 
(
    id bigint primary key generated always as identity,
    person_of_contact_id int,
    alias varchar(140) not null,
    email_address_main varchar(240) not null,
    email_address_alt varchar(240) null,
    phone_number_main char(10) null,
    phone_number_emer char(10) null,
    phone_number_alt char(10) null,
    hq_city varchar(100) null default 'atlanta',
    hq_state_abbr char(2) null default 'ga',
    hq_country_abbr char(2) null default 'us',
    educational boolean null default true,
    non_profit boolean null default false,
    government boolean null default false,
    municipal boolean null default false,
    website_url varchar(100) null,
    twitter_url varchar(100) null,
    instagram_url varchar(100) null,
    facebook_url varchar(100) null,
    tiktok_url varchar(100) null,
    linkedin_url varchar(100) null,
    aux_url_a varchar(100) null,
    aux_url_b varchar(100) null,
    unique (
      alias,
      website_url,
      twitter_url,
      instagram_url,
      facebook_url,
      linkedin_url,
      aux_url_a,
      aux_url_b
    ),
    foreign key(person_of_contact_id) references person(id) on delete cascade 
  );
