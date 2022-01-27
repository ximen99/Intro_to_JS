create table moons(
  id serial primary key,
  designation integer not null check(designation > 0),
  semi_major_axis numeric check(semi_major_axis > 0.0),
  mass numeric check(semi_major_axis > 0.0),
  planet_id integer not null references planets(id)

)