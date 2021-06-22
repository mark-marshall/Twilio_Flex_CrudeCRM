import React from 'react';
import UpperPanel from './UpperPanel';
import LowerPanel from './LowerPanel';
import NoData from './NoData';
import { withTaskContext } from '@twilio/flex-ui';

import './PanelContainer.css';

const crudeCRM = [
  {
    handle: '@peters_vinny',
    name: 'Vinny James Peters',
    id: 1942201,
    email: 'vinnypeters@gmail.com',
    customerSince: '01/02/2020',
    lifetimeValue: '3211.98 GBP',
    description:
      'Long-term customer with history of repeat suit purchases pre-summer and during winter. 20% of orders resulted in returns. Last purchase was returned on two ocassions before refund.',
    previousInteractions: [
      {
        type: 'Support',
        date: '10/06/2021',
        notes: 'Customer requested refund for order 1H23HMS.',
        sentiment: 'Negative',
      },
      {
        type: 'Return',
        date: '05/06/2021',
        notes: 'Customer processed return for order 1H23HMS.',
        sentiment: 'Average',
      },
      {
        type: 'Purchase',
        date: '02/04/2021',
        notes: 'Customer purchased Medina suit, order 1H23HMS.',
        sentiment: 'Unknown',
      },
      {
        type: 'Purchase',
        date: '01/02/2021',
        notes: 'Customer purchased sale Valance suit, order 1N3DPOR.',
        sentiment: 'Positive',
      },
      {
        type: 'Support',
        date: '01/02/2021',
        notes: 'Customer requested fit information for Valance suit.',
        sentiment: 'Average',
      },
      {
        type: 'Support',
        date: '30/01/2021',
        notes: 'Customer requested length of sale information.',
        sentiment: 'Negative',
      },
      {
        type: 'Purchase',
        date: '01/01/2021',
        notes: 'Customer purchased sale Osprey suit, order 1PGOSS.',
        sentiment: 'Unknown',
      },
      {
        type: 'Support',
        date: '12/12/2020',
        notes: 'Customer requested London store opening times for a fitting.',
        sentiment: 'Positive',
      },
      {
        type: 'Support',
        date: '01/12/2020',
        notes: 'Customer asked for COVID policy around fittings.',
        sentiment: 'Negative',
      },
      {
        type: 'Purchase',
        date: '01/02/2020',
        notes: 'Customer purchased sale Valance shirt, order 1V5DPOL.',
        sentiment: 'Unknown',
      },
    ],
    catalogue: [
      {
        name: 'Medina',
        price: '320|-20%',
        availability: true,
      },
      {
        name: 'Valance',
        price: '280|-15%',
        availability: false,
      },
      {
        name: 'Osprey',
        price: '280|-15%',
        availability: true,
      },
      {
        name: 'Steeple',
        price: '315|-20%',
        availability: true,
      },
      {
        name: 'Dodger',
        price: '120|-5%',
        availability: true,
      },
      {
        name: 'Austin',
        price: '490|-25%',
        availability: false,
      },
      {
        name: 'Opper',
        price: '220|-10%',
        availability: true,
      },
    ],
  },
];

const PanelContainer = (taskContext: any) => {
  return (
    <div className="panel-container">
      {taskContext?.task?._task?.attributes?.name &&
      crudeCRM.filter(
        (cust: any) => cust.handle === taskContext.task._task.attributes.name
      ).length > 0 ? (
        <>
          <UpperPanel
            user={
              crudeCRM.filter(
                (cust: any) =>
                  cust.handle === taskContext.task._task.attributes.name
              )[0]
            }
            taskContext={taskContext}
          />
          <LowerPanel
            user={
              crudeCRM.filter(
                (cust: any) =>
                  cust.handle === taskContext.task._task.attributes.name
              )[0]
            }
          />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default withTaskContext(PanelContainer);
