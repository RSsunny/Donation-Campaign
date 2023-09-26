import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getLocalStor } from '../../Local/localStorage';
import { PieChart, Pie,  Cell, } from 'recharts';


const Statistics = () => {
    const AllCategoris=useLoaderData()
    const [categorie,setCategori]=useState(0)
    const [parseDonation,setparseDonetion]=useState(0)
    const [parse,setparse]=useState(0)
    const [yourdonetion,setYourDonetion]=useState()
    const [donetion,setDonetion]=useState(0)


    useEffect(()=>{
        const storcardId=getLocalStor()
        if(AllCategoris){
            const matchId=AllCategoris.filter(categori=>storcardId.includes(categori.id))
            const donationParse=Math.ceil((100*`${categorie}`)/12)
            const notdonation=100-donationParse 
            setparseDonetion(donationParse)
            setparse(notdonation)
            setYourDonetion(matchId)
            setCategori(matchId.length)   
        }
    },[categorie,AllCategoris])


    useEffect(()=>{
      if(categorie){
        const yourTotaldonation=yourdonetion.reduce((p,c)=>p+c.price,0)
        setDonetion(yourTotaldonation)
      }
    },[yourdonetion,donetion,categorie])
   
    console.log(donetion);

    
    const totalDonetion=AllCategoris.reduce((p,c)=>p+c.price,0)
    console.log(totalDonetion);
    

    const data = [
        { name: 'Group A', value: parseInt(`${parseDonation}`) },
        { name: 'Group B', value: parseInt(`${parse}`) },
        
      ];
      const COLORS = ['green', 'red'];
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <>
        <div className='flex justify-center'> 
        <PieChart width={300} height={300}>
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
        <div className='flex flex-col md:flex-row gap-8 justify-center px-5 font-bold'>
        <div>
            <h1 >Your Donation= ${donetion}</h1>
            <h1 className='px-5 py-1 bg-green-500'></h1>
        </div>
        <div>
        <h1>Total Donation = ${totalDonetion}</h1>
        <h1 className='px-5 py-1 bg-red-500'></h1>
    </div>
        
    </div> 
    </>
    );
};

export default Statistics;
