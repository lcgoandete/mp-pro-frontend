import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Success() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <ul>
        <li>
          dsdsd
          {searchParams.get('(collection_id')}
        </li>
        <li>{searchParams.get('collection_status')}</li>
        <li>{searchParams.get('payment_id')}</li>
        <li>{searchParams.get('status')}</li>
        <li>{searchParams.get('external_reference')}</li>
        <li>{searchParams.get('payment_type')}</li>
        <li>{searchParams.get('merchant_order_id')}</li>
        <li>{searchParams.get('preference_id')}</li>
        <li>{searchParams.get('site_id')}</li>
        <li>{searchParams.get('processing_mode')}</li>
        <li>{searchParams.get('merchant_account_id')}</li>
      </ul>
    </div>
  );
}
