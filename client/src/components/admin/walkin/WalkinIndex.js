import React, {Component} from 'react';
import WalkinShow from "./WalkinShow";
import {Link} from 'react-router-dom';

const WalkinIndex = ({ walkins, updateWalkin, addWalkin, }) => (
  <WalkinConsumer>
    { value => (
        <>
          { value.walkins.map(walkin =>
            <WalkinShow
              key={walkin.id}
              {...walkin}
              updateWalkin={value.updateWalkin}
            />
          )}
          <Link to="/walkinForm">Add new Walkin</Link>
        </>
      )}
  </WalkinConsumer>
)
export default WalkinIndex;