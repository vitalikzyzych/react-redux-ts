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

const UsersScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list: customers } = useSelector(customerSelector);
  const { list: senderIds, isLoading } = useSelector(senderIdSelector);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [filteredSenderIds, setFilteredSenderIds] = useState(senderIds);

  const handleCustomerSelected = (e: DropdownChangeEvent) => {
    setSelectedCustomer(e.value);
    setFilteredSenderIds(
      e.value ? senderIds.filter((senderId) => senderId.customerId === e.value) : senderIds,
    );
  };

  useEffect(() => {
    dispatch(senderIdsList());
  }, []);

  useEffect(() => {
    setFilteredSenderIds(senderIds);
  }, [senderIds]);

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
          paginator={filteredSenderIds?.length > 10}
          rows={10}
          value={filteredSenderIds}
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
                {data.status === 'REJECTED' && (
                  <Button
                    icon={<FontAwesomeIcon size="1x" icon={['fal', 'check']} />}
                    className="p-button-success"
                    style={{ marginRight: '.5em' }}
                  />
                )}
                {data.status === 'APPROVED' && (
                  <Button
                    icon={<FontAwesomeIcon size="1x" icon={['fal', 'ban']} />}
                    className="p-button-danger"
                  />
                )}
              </>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default UsersScreen;
