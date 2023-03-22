/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { AppDispatch } from 'core/app/rootStore';

import { senderIdSelector, senderIdsList } from './store';
import { customerSelector } from 'store/customer';
import { formattedDateTime } from 'utils';
import { Status } from 'components';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const { list: customers } = useSelector(customerSelector);
  const { list: senderIds, isLoading } = useSelector(senderIdSelector);

  const handleCustomerSelected = (e: DropdownChangeEvent) => {
    console.log(e);
    setSelectedCustomer(e.value);
  };

  useEffect(() => {
    dispatch(senderIdsList());
  }, []);

  console.log(senderIds);

  return (
    <div className="grid">
      <div className="w-full mb-2 flex justify-content-end">
        <span className="p-float-label">
          <Dropdown
            id="customer"
            value={selectedCustomer}
            onChange={handleCustomerSelected}
            options={customers}
            optionLabel="customername"
            optionValue="customerid"
            className="w-full sm:w-14rem"
          />
          <label htmlFor="customer">Customer</label>
        </span>
      </div>
      <div className="col-12 card">
        <h3 className="font-normal">Sender IDs History</h3>
        <DataTable
          loading={isLoading}
          paginator={senderIds?.length > 10}
          rows={10}
          value={senderIds}
          showGridlines
          // tableStyle={{ minWidth: '50rem' }}
        >
          <Column field="customerName" header="Customer"></Column>
          <Column field="title" header="Sender ID"></Column>
          <Column
            field="status"
            header="Status"
            body={(data) => <Status value={data.status} />}
          ></Column>
          <Column
            field="createdAt"
            header="Timestamp"
            body={(data) => formattedDateTime(data.createdAt)}
          ></Column>
          <Column
            header="Actions"
            body={(data) => (
              <>
                <Button
                  icon={<FontAwesomeIcon size="1x" icon={['fal', 'check']} />}
                  className="p-button-success"
                  style={{ marginRight: '.5em' }}
                />
                <Button
                  icon={<FontAwesomeIcon size="1x" icon={['fal', 'ban']} />}
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

export default UsersScreen;
