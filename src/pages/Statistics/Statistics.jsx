import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getLocalStor } from '../../Local/localStorage';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Tooltip } from 'chart.js';



const Statistics = () => {
    const AllCategoris=useLoaderData()
    const [categorie,setCategori]=useState(0)
    const [parseDonation,setparseDonetion]=useState(0)
    const [parse,setparse]=useState(0)
   console.log(parseDonation,parse);
    useEffect(()=>{
        const storcardId=getLocalStor()
        if(AllCategoris){
            const matchId=AllCategoris.filter(categori=>storcardId.includes(categori.id))

            
            const donationParse=Math.ceil((100*`${categorie}`)/12)
            const notdonation=100-donationParse
            setparseDonetion(donationParse)
            setparse(notdonation)
            
            setCategori(matchId.length)

            
        }
    },[categorie])
    
    
    

    
        
    
    // console.log(notdonation,donationParse);
    const data = [
        { name: 'Group A', value: parseInt(`${parseDonation}`) },
        { name: 'Group B', value: parseInt(`${parse}`) },
        
      ];
      const COLORS = ['red', 'green'];
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

// console.log(categorie);


    return (
        <div className='flex justify-center'> 
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>                     
        </div>
    );
};

export default Statistics;
