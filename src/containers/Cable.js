import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({ teams, handleReceivedMessage }) => {
  return (
    <Fragment>
      {teams.map(team => {
        return (
          <ActionCableConsumer
            key={team.id}
            channel={{ channel: 'MessagesChannel', team: team.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;
