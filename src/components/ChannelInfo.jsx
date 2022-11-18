import React from 'react';

export default function ChannelInfo({ id, name }) {
  return (
    <div>
      <h2>{id}</h2>
      <h2>{name}</h2>
    </div>
  );
}
