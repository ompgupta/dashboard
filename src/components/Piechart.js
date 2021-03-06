import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  // lables:[20,40,50],
  datasets: [
    {
      lable:[20,40,50],
      data: [30,25,40],
      backgroundColor: [
        'rgba(255, 99, 99)',
        'rgba(54, 162, 235)',
        'rgb(159, 1, 190)'
      ],
      borderWidth: 0,
    },
  ],
};

const Piechart=()=>{
    return(
    <>
    <Doughnut data={data} />
  </>
    )
}
export default Piechart;