SELECT e.name as event, e.starts_at, sections.name as section, seats.row, seats.number as seat
FROM customers as c LEFT JOIN tickets as t on c.id = t.customer_id
     LEFT JOIN events as e on e.id = t.event_id
     LEFT JOIN seats on t.seat_id = seats.id
     LEFT JOIN sections on seats.section_id = sections.id
WHERE c.email = 'gennaro.rath@mcdermott.co';