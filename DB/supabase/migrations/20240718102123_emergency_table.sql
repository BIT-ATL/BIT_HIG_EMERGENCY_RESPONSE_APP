drop table if exists emergency;
create table emergency 
(
    id bigint primary key generated always as identity,
    resolver_id int null,
    affected_domain_id int null,
    first_reporter_id int null,
    -- general
    date_occured timestamp with time zone null default current_timestamp,
    validated boolean null default false,
    description text null,
    location_desc text null,
    location_coords point not null,
    -- violence
    active_shooter boolean null default false,
    physical_altercation boolean null default false,
    sexual_assault boolean null default false,
    sexual_harassment boolean null default false,
    domestic_violence_abuse boolean null default false,
    possession_of_firearm boolean null default false,
    -- health
    suicide_attempt boolean null default false,
    panic_attack boolean null default false,
    severe_anxiety_attack boolean null default false,
    mental_health_crisis boolean null default false,
    -- fire
    fire_alarm_activation boolean null default false,
    electrical_fire boolean null default false,
    -- theft
    vandalism boolean null default false,
    property_theft boolean null default false,
    burglary boolean null default false,
    -- auto and traffic incidents
    car_crash boolean null default false,
    bike_crash boolean null default false,
    scooter_crash boolean null default false,
    hit_pedestrian boolean null default false,
    -- harassment/discrimination
    racial_discrimination boolean null default false,
    ethnic_discrimination boolean null default false,
    religious_discrimination boolean null default false,
    gender_discrimination boolean null default false,
    disability_discrimination boolean null default false,
    -- natural disasters & weather
    earthquake boolean null default false,
    hurricane boolean null default false,
    tornado boolean null default false,
    flood boolean null default false,
    drought boolean null default false,
    wildfire boolean null default false,
    extreme_temperature boolean null default false,
    severe_storm boolean null default false,
    blizzard boolean null default false,
    -- digital and cyber threats
    cyberbullying boolean null default false,
    phishing boolean null default false,
    ransomware boolean null default false,
    ddos_attack boolean null default false,
    malware_virus boolean null default false,
    data_breach boolean null default false,
    it_sys_failure boolean null default false,
    emp_attack boolean null default false,
    -- suspicious activity / trespassing
    unauthorized_individual boolean null default false,
    suspicious_package boolean null default false,
    suspicious_behavior boolean null default false,
    security_breach boolean null default false,
    -- civic unrest / riot
    non_peaceful_protest boolean null default false,
    riot boolean null default false,
    mass_workplace_incident boolean null default false,
    -- hazards
    terrorist_threat boolean null default false,
    radiological_threat boolean null default false,
    biological_threat boolean null default false,
    -- utilities
    power_grid_failure boolean null default false,
    structural_collapse boolean null default false,
    water_supply_contamination boolean null default false,
    gas_leak boolean null default false,
    -- metrics/etc
    times_reported int null default 0,
    resolved boolean null default false,
    resolve_date timestamp with time zone null,
    foreign key(first_reporter_id) references person(id) on delete cascade,
    foreign key(resolver_id) references person(id) on delete cascade,
    foreign key(affected_domain_id) references spatial_domain(id)
  );
