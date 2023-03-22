/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AppDispatch } from 'core/app/rootStore';

import { routingSelector, routingList } from './store';
import { formattedDateTime } from 'utils';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoutingHistoryPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, isLoading } = useSelector(routingSelector);

  useEffect(() => {
    dispatch(routingList());
  }, []);

  return (
    <div className="grid">
      <div className="col-12 card">
        <h3 className="font-normal">Routing History</h3>
        <DataTable
          loading={isLoading}
          paginator={list?.length > 10}
          rows={10}
          value={list}
          showGridlines
          // tableStyle={{ minWidth: '50rem' }}
        >
          <Column field="title" header="Campaign Name"></Column>
          <Column field="topic" header="Topic"></Column>
          <Column field="prefix" header="Prefix"></Column>
          <Column field="phoneNumberLength" header="Phone Number Length"></Column>
          <Column
            field="createdAt"
            header="Timestamp"
            body={(data) => formattedDateTime(data.createdAt)}
          ></Column>
          <Column
            header="Actions"
            body={() => (
              <>
                <Button
                  icon={<FontAwesomeIcon size="1x" icon={['fal', 'repeat']} />}
                  className="p-button-success"
                  style={{ marginRight: '.5em' }}
                />
                <Button
                  icon={<FontAwesomeIcon size="1x" icon={['fal', 'trash']} />}
                  className="p-button-danger"
                />
              </>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default RoutingHistoryPage;
