select c.name, c.capital
from countries c 
left join continents cc
  on c.continent_id = cc.id
where cc.continent_name = 'Europe';