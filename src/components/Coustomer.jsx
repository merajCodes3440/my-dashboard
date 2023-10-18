import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 500 },
  { name: 'Group C', value: 200 },
  // { name: 'Group D', value: 200 },
];
const COLORS = [ '#633BE9','#DEE0E7','#F33497'];

const Coustomer = () => {
  return (
    <div className="pieChart">
      <div className='pie'>
        <h3>Customers</h3>
        <h6>Custoers that buy products</h6>
      </div>
    <ResponsiveContainer  height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Coustomer;
