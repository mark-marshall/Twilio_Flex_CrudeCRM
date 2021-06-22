import React from 'react';
import axios from 'axios';
import * as Flex from '@twilio/flex-ui';

const UpperPanel = ({ user, taskContext }: any) => {
  return (
    <div className="upper-panel-container">
      <div className="upper-left-panel-container">
        <h1>{user.name}</h1>
        <h5>ID{user.id}</h5>
        <ul>
          <li>
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#d32f2f"
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.001 14c-2.332 0-4.145 1.636-5.093 2.797l.471.58c1.286-.819 2.732-1.308 4.622-1.308s3.336.489 4.622 1.308l.471-.58c-.948-1.161-2.761-2.797-5.093-2.797zm-3.501-6c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"
                />
              </svg>
            </div>
            <div>Negative last experience</div>
          </li>
          <li>
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"
                  fill="#87CEFA"
                />
              </svg>
            </div>
            <div>{user.email}</div>
          </li>
          <li>
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#87CEFA"
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </div>
            <div>{user.handle}</div>
          </li>
          <li>
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#87CEFA"
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
                />
              </svg>
            </div>
            <div>{user.customerSince}</div>
          </li>
          <li>
            <div className="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#87CEFA"
                  d="M19.888 19.744c-1.229.588-1.88.732-3.018.732-2.735 0-4.233-2.064-7.453-.977.489-.641 2.698-3 2.431-6.5h4.152v-1.988h-4.559c-.708-2.295-1.913-4.278-.517-6.471 1.441-2.263 4.976-1.733 5.967 1.484l3.561-.521c-.654-4.05-4.069-5.503-6.884-5.503-4.528 0-9.066 3.621-6.973 11.012h-2.595v1.988h3.068c.692 3.823-.458 5.797-2.958 7.901l1.796 3.099c4.771-2.849 7.205 0 11.499 0 1.296-.008 2.394-.309 3.595-.994l-1.112-3.262z"
                />
              </svg>
            </div>
            <div>{user.lifetimeValue}</div>
          </li>
        </ul>
        <div className="customer-description">
          <h5>Summary</h5>
          {user.description}
        </div>
      </div>
      <div className="upper-right-panel-container">
        <h1>Discount Catalogue</h1>
        <ul className="catalogue">
          <li className="cat-headers" key="headers">
            <div className="cat-name">Name</div>
            <div className="cat-price">Price</div>
            <div className="cat-availability">Available</div>
            <div className="cat-action">Action</div>
          </li>
          {user.catalogue.map((c: any) => (
            <li key={`${c.name}`}>
              <div className="cat-name">{c.name}</div>
              <div className="cat-price">{c.price}</div>
              <div className="cat-availability">
                {c.availability ? 'Yes' : 'No'}
              </div>
              <div className="cat-action">
                {c.availability ? (
                  <button
                    onClick={async () => {
                      //   await Flex.Actions.invokeAction('SendMessage', {
                      //     body: 'Use code VINNY20 to receive 20% off.',
                      //     channelSid:
                      //       taskContext.chatChannel.source.entityName.split(
                      //         '.'
                      //       )[0],
                      //   });
                      await axios.post(
                        'https://mmarshall.eu.ngrok.io/fromFlex',
                        {
                          Source: 'SDK',
                          Body: `Medina Natural Fit Suit. Use code VINNY20 to receive 20% off.`,
                          Type: 'CTA',
                          ChannelSid:
                            taskContext.chatChannel.source.entityName.split(
                              '.'
                            )[0],
                        }
                      );
                    }}
                  >
                    Buy
                  </button>
                ) : (
                  <button>Back Order</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpperPanel;
