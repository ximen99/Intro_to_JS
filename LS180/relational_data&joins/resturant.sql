create table bidders (
  id serial primary key,
  name text not null
)

create table items (
  id serial primary key,
  name text not null,
  initial_price decimal(6,2) not null check(initial_price BETWEEN 0.01 AND 1000.00)≈,
  sales_price decimal(6,2) check(sales_price BETWEEN 0.01 AND 1000.00)
)

create table bids(
  id serial primary key,
  bidder_id integer not null references bidders(id) ON DELETE CASCADE,
  item_id integer not null references items(id) ON DELETE CASCADE,
  amount decimal(6,2) check(amount BETWEEN 0.01 AND 1000.00) not null
)

create index on bids(bidder_id, item_id)