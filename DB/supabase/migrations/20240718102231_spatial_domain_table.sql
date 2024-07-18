-- drop table if exists spatial_domain;
create table spatial_domain
(
  -- keys
  id bigint primary key generated always as identity,
  owner_id int null,
  associated_org_id int null,
  
  -- general description
  alias varchar(140) not null,
  short_description varchar(172),
  long_description text,

  -- location description
  latitude point null,
  longitude point null,
  building_number varchar(32) not null, -- could be a1005
  street_name varchar(120) not null,
  street_type varchar(120) not null, -- road, street, blvd, etc.
  city varchar(120) not null,
  state_abbr char(2) not null,
  postal_code char(5) not null,
  
  -- usage capacities
  
  -- office and retail
  corporate_office boolean null default false,
  co_working_space boolean null default false,
  conference_hall boolean null default false,
  executive_suites boolean null default false,
  shopping_center boolean null default false,
  boutique boolean null default false,
  supermakert boolean null default false,
  department_store boolean null default false,
  showroom boolean null default false,
  hotel_motel boolean null default false,
  bnb boolean null default false,
  event_venue boolean null default false,
  fine_dining boolean null default false,
  fast_food boolean null default false,
  coffee_shop boolean null default false,
  bar_or_pub boolean null default false,
  food_court_hall boolean null default false,
  
  -- domiciles
  apartment_condo boolean null default false,
  single_family_home boolean null default false,
  townhouse boolean null default false,
  student_housing boolean null default false, 
  retirement_home_center boolean null default false,
  live_work_unit boolean null default false,
  mixed_use_residential_complex boolean null default false,
  community_housing boolean null default false,
  
  -- education
  elementary_school boolean null default false,
  middle_or_high_school boolean null default false,
  special_education_school boolean null default false,
  vocational_school boolean null default false,
  university_college boolean null default false,
  techincal_institute boolean null default false,
  reserch_center boolean null default false,
  dormitory boolean null default false,
  language_school boolean null default false,
  corporate_training_center boolean null default false,
  continuing_education_center boolean null default false,
  
  -- healthcare
  hospital boolean null default false,
  clinic_medical_office boolean null default false,
  urgent_care_center boolean null default false,
  speciality_care_center boolean null default false,
  
  -- rehabilitation
  physical_therapy_center boolean null default false,
  wellness_or_spa_facility boolean null default false,
  mental_health_clinic boolean null default false,
  
  -- assisted living
  nursing_home boolean null default false,
  senior_living_community boolean null default false,
  hospice_care_facility boolean null default false,
  
  -- industrial
  factory boolean null default false,
  assembly_plant boolean null default false,
  food_processing_plant boolean null default false,
  packaging_facility boolean null default false,
  distribution_center boolean null default false,
  cold_storage_facility boolean null default false,
  inventory_warehouse boolean null default false,
  self_storage_units boolean null default false,
  
  -- entertainment and leisure
  movie_theater boolean null default false,
  live_performance_theater boolean null default false,
  concert_hall boolean null default false,
  amphitheater boolean null default false,
  gym_fitness_center boolean null default false,
  ports_arena boolean null default false,
  aquatic_center boolean, -- includes swimming pools
  amusement_park boolean default false,
  fun_center boolean null default false, -- includes bowling alleys, dave n busters, etc.
  art_design_musuem boolean null default false,
  art_gallery boolean null default false,
  science_museum boolean null default false,
  history_museum boolean null default false,
  interactive_exhibit boolean null default false,

  -- tech
  laboratory boolean null default false,
  research_institute boolean null default false,
  innovation_hub boolean null default false,
  data_center boolean null default false,
  start_up_incubator boolean null default false,
  maker_space boolean null default false,

  -- transit
  bus_station boolean null default false,
  train_station boolean null default false,
  airport boolean null default false,
  parking_garage boolean null default false,
  surface_praking_lot boolean null default false,
  cycle_storage_facility boolean null default false,
  transportation_depot boolean null default false,
  freight_terminal boolean null default false,

  -- agricultural
  greenhouse boolean null default false,
  barn boolean null default false,
  stable boolean null default false,
  farm_to_table_op boolean null default false, -- farm to table operation
  farmers_market boolean null default false,

  -- misc, specialty
  military_base boolean null default false,
  defense_training_center boolean null default false,
  secure_storage_facility boolean null default false,
  broadcast_station boolean null default false,
  telecom_hub boolean null default false,
  film_and_tv_production_studio boolean null default false,
  
  -- civic: govt/municipal
  municipal_office boolean null default false,
  courthouse boolean null default false,
  police_station boolean null default false,
  public_servie_center boolean null default false,

  -- religious, spiritual
  church boolean null default false,
  mosque boolean null default false,
  synagouge boolean null default false,
  temple boolean null default false,
  monastery boolean null default false,

  -- community
  library boolean null default false,
  recreation_center boolean null default false,
  cultural_center boolean null default false,
  community_hall boolean null default false,

  -- zoning
  residential boolean null default false,
  industrial boolean null default false,
  recreational boolean null default false,
  mixed_use boolean null default false,
  agricultura boolean null default false,
  historic boolean null default false,
  rural boolean null default false,
  aesthetic boolean null default false, -- yes this is zoning type

  -- ada compliance
  accessible_entrance boolean null default false,
  parking boolean null default false,
  drop_off_areas boolean null default false,
  service_entrance boolean null default false,
  horizontal_circulation boolean null default false,
  doors boolean null default false,
  emergency_egress boolean null default false,
  wayfinding_signage boolean null default false,
  accessible_controls boolean null default false,
  vertical_circulation boolean null default false,
  elevator boolean null default false,
  wide_corridors boolean null default false,
  braille_tactile_signage boolean null default false,
  adult_change_facilities boolean null default false,
  public_toilet boolean null default false,
  non_gendered_restrooms boolean null default false,
  stairs boolean null default false,
  ramps boolean null default false,
  number_of_emergency_exits int null default 1,

  -- spatial description
  maximum_capacity int not null,
  area_square_feet numeric(9,2) null default 0.0,
  lot_size_acres numeric(8,2) null default 0.0,
  number_of_floors int null default 0,
  open_to_public boolean default false,
  accessible_roof boolean null default false,

  -- utilities
  electric boolean null default false,
  water boolean null default false,
  gas boolean null default false,
  ethernet boolean null default false,
  wifi boolean null default false,

  -- security features
  cctv boolean null default false,
  human_security boolean null default false,
  automated_secuirty boolean null default false,
  biometric_scanners boolean null default false,
  facial_recogniton_systems boolean null default false,
  keycard_entry boolean null default false,
  smart_locks boolean null default false, 
  turnstile_gates boolean null default false,
  barrier_fencing boolean null default false,
  motion_detectors boolean null default false,
  metal_detectors boolean null default false,
  x_ray_scanners boolean null default false,
  intercom_systems boolean null default false,
  hidden_cameras boolean null default false,
  security_mirros boolean null default false,
  alarm_systems boolean null default false,
  panic_buttons boolean null default false,
  incident_response_plan boolean null default false,
  routine_security_audits boolean null default false,
  visitor_policies boolean null default false,
  license_plate_recognition_systems boolean null default false,
  ai_assisted_surveillance boolean null default false,
  iot_security_devices boolean null default false,
  mass_notifcation_systems boolean null default false,
  mobile_alert_systems boolean null default false,
  real_time_personnel_tracking boolean null default false,

  -- fire safety & emergency response
  fire_alarms boolean null default false,
  smoke_detectors boolean null default false,
  fire_extinguishers boolean null default false,
  emergency_exit_signage boolean null default false,
  safe_rooms_sheltering boolean null default false,
  first_aid_kits boolean null default false,
  aeds boolean null default false, -- automated external defibrillators
  communication_systems boolean null default false,
  sprkinler_systems boolean null default false,

  -- cybersecurity features
  firewalls boolean null default false,
  vpn boolean null default false,
  secure_wifi boolean null default false,
  idps boolean null default false, -- intrusion detection and prevention systems
  network_monitoring_tools boolean null default false,
  encrypted_stroage boolean null default false,
  data_loss_prevention_tools boolean null default false,
  secure_backup_solutions boolean null default false,
  multifactor_authentication boolean null default false,
  user_Activity_monitoring boolean null default false,
  password_mgmt boolean null default false,
  sso boolean null default false,

  -- environmental/structural features
  reinforced_walls_windows boolean null default false,
  bulletproof_glass boolean null default false,
  water_leak_detectors boolean null default false,
  gas_leak_detectors boolean null default false,
  temp_humidity_sensors boolean null default false,
  vibration_sensors boolean null default false,
  failover_systems_for_critical_services boolean null default false,
  backup_hvac boolean null default false,
  backup_power boolean null default false,

  -- documentation
  emergency_plan_on_file boolean null default false, -- should be able to upload this
  maintenance_records_on_file boolean null default false, -- also up-loadable

  -- misc
  additional_note_a varchar(140) null,
  additional_note_b varchar(140) null,
 
  -- spatial description

  foreign key(owner_id) references person(id) on delete cascade,
  foreign key(associated_org_id) references organization(id),
  unique(alias)
);
