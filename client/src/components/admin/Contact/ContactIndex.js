import React, {Component} from './node_modules/react';
import WalkinShow from "./WalkinShow";
import {Link} from './node_modules/react-router-dom';

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
          <Link to="/admin/walkinForm">Add new Walkin</Link>
        </>
      )}
  </WalkinConsumer>
)
export default WalkinIndex;