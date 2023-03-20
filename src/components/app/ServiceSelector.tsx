/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateCurrentService, updateServices } from 'store/settings';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { SERVICE_OPTIONS } from 'const';
import { IServiceOption } from 'types';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export const getIcon = (option: string) => {
  switch (option) {
    case 'sms':
      return 'comment-sms';
    case 'pay':
      return 'money-check-dollar';
    case 'survey':
      return 'poll-people';
    default:
      return 'comments-sms';
  }
};

interface IProps {
  currentService: string;
  services: { [key: string]: boolean };
}

const ServiceSelector: React.FC<IProps> = ({ services, currentService }) => {
  useEffect(() => {
    dispatch(updateServices(services));
    dispatch(updateCurrentService({ currentService }));
  }, []);
  const dispatch = useDispatch();

  const onSelect = async (e: DropdownChangeEvent) => {
    await dispatch(updateCurrentService({ currentService: e.target.value, reload: true }));
  };

  const filteredOptions = SERVICE_OPTIONS.filter((item: IServiceOption) => services[item.value]);

  const optionTemplate = (option: IServiceOption) => {
    return (
      <div className="flex align-items-center my-1">
        <FontAwesomeIcon size="1x" icon={['fal', `fa-${getIcon(option.value)}` as IconName]} />
        <div className="ml-2">{option.name}</div>
      </div>
    );
  };

  return (
    <div className="flex align-items-center">
      <Dropdown
        value={currentService}
        options={filteredOptions}
        onChange={onSelect}
        optionLabel="name"
        placeholder="Select Service"
        className="mr-3 w-10rem"
        itemTemplate={optionTemplate}
      />
    </div>
  );
};

export default ServiceSelector;
