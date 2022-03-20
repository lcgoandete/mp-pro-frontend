import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Success() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <ul>
        <li>{`collection_id: ${searchParams.get('(collection_id')}`}</li>
        <li>{`collection_status: ${searchParams.get('collection_status')}`}</li>
        <li>{`payment_id: ${searchParams.get('payment_id')}`}</li>
        <li>{`status: ${searchParams.get('status')}`}</li>
        <li>{`external_reference: ${searchParams.get('external_reference')}`}</li>
        <li>{`payment_type: ${searchParams.get('payment_type')}`}</li>
        <li>{`merchant_order_id: ${searchParams.get('merchant_order_id')}`}</li>
        <li>{`preference_id: ${searchParams.get('preference_id')}`}</li>
        <li>{`site_id: ${searchParams.get('site_id')}`}</li>
        <li>{`processing_mode: ${searchParams.get('processing_mode')}`}</li>
        <li>{`merchant_account_id: ${searchParams.get('merchant_account_id')}`}</li>
      </ul>
    </div>
  );
}
