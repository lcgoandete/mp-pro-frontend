import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Failure() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('collection_id'));
  console.log(searchParams.get('collection_status'));
  return (
    <div>
      Failure
    </div>
  );
}
