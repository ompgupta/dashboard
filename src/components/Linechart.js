import React from 'react';
import { Line } from 'react-chartjs-2';

const Linechart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets:[
      {
        label:'label1',
        data :[0,10,25,15,40,25,20],
        backgroundColor: 'rgba(255, 6,6,0.5)',
        fill:true,
        borderColor: 'rgba(255, 6,6)',
        borderWidth: 2,
      color:'rgb(6, 52, 255)'
      },
      {
        label:'label2',
        data :[10,5,15,25,20,30,23],
        backgroundColor: 'rgba(0, 0,0,0.5)',
        fill:true,
        borderColor: 'rgba(0, 0,0)',
        borderWidth: 2,
        color:'rgb(6, 52, 255)'
      }

    ]
  
  

  }

   return <Line data={data} />
}

export default Linechart;
