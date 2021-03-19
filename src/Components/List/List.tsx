import React from 'react';
import { useQuery } from '@apollo/client';
import { employeesList } from '../../Services/GraphQl/index';


export const List: React.FC = (): JSX.Element => {

  const { loading, error, data } = useQuery(employeesList);
  console.log(data, 'data')
  return (
    <h1> this is the list </h1>
  )

}