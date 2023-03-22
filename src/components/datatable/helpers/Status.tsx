// import { STATUSES as SURVEY_STATUSES } from 'helpers/survey';

import { DetailedHTMLProps, HTMLAttributes } from 'react';

const GLOBAL_STATUSES = {
  SUCCESS: 'Success',
  FAILED: 'Failed',
  COMPLETE: 'Complete',
  REJECTED: 'Rejected',
  ACCEPTED: 'Accepted',
  APPROVED: 'Approved',
  PENDING: 'Pending',
  UNKNOWN: 'Unknown',
};

// const ALL_STATUSES = { ...SURVEY_STATUSES, ...GLOBAL_STATUSES };

const ALL_STATUSES = { ...GLOBAL_STATUSES };

const getStyles = (status: string) => {
  let statusStyles = {
    borderRadius: '4px',
    padding: '0.25em 0.5rem',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: '.875rem',
    letterSpacing: '0.3px',
    background: '#efeff0',
    color: '#636363',
  };
  switch (status) {
    case 'drafted':
      statusStyles = {
        ...statusStyles,
        background: '#efeff0',
        color: '#636363',
      };
      break;
    case 'ongoing':
      statusStyles = {
        ...statusStyles,
        background: '#3fc380',
        color: '#fff',
      };
      break;
    case 'approved':
      statusStyles = {
        ...statusStyles,
        background: '#038aff',
        color: '#fff',
      };
      break;
    case 'expired':
      statusStyles = {
        ...statusStyles,
        background: '#f22613',
        color: '#fff',
      };
      break;
    case 'closed':
      statusStyles = {
        ...statusStyles,
        background: '#6c7a89',
        color: '#fff',
      };
      break;

    case 'success':
      statusStyles = {
        ...statusStyles,
        background: '#3fc380',
        color: '#fff',
      };
      break;

    case 'complete':
      statusStyles = {
        ...statusStyles,
        background: '#038aff',
        color: '#fff',
      };
      break;

    case 'failed':
      statusStyles = {
        ...statusStyles,
        background: '#f22613',
        color: '#fff',
      };
      break;
    case 'accepted':
      statusStyles = {
        ...statusStyles,
        background: '#038aff',
        color: '#fff',
      };
      break;
    case 'rejected':
      statusStyles = {
        ...statusStyles,
        background: '#f22613',
        color: '#fff',
      };
      break;
    case 'pending':
      statusStyles = {
        ...statusStyles,
        background: '#FFA726',
        color: '#FFF',
      };
      break;
    case 'unknown':
      statusStyles = {
        ...statusStyles,
        background: '#efeff0',
        color: '#636363',
      };
      break;
    default:
      statusStyles = {
        ...statusStyles,
        background: '#efeff0',
        color: '#636363',
      };
      break;
  }
  return statusStyles;
};

const Status = ({ value }: { value: string }): JSX.Element => {
  if (!value) return <></>;
  const statusKey = value.toUpperCase();
  return (
    <span
      style={
        getStyles(value.toLowerCase()) as DetailedHTMLProps<
          HTMLAttributes<HTMLSpanElement>,
          HTMLSpanElement
        >
      }
    >
      {(ALL_STATUSES as any)[statusKey] || 'N/A'}
    </span>
  );
};

export default Status;
