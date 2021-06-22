import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import PanelContainer from './components/PanelContainer';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'MandsPlugin';

export default class MandsPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    this.registerReducers(manager);

    const configuration: any = {
      colorTheme: {
        // overrides: {
        //   MainHeader: {
        //     Container: {
        //       background: '#BFD757',
        //       color: '#fff',
        //     },
        //   },
        // },
      },
    };

    flex.CRMContainer.Content.replace(<PanelContainer key="PanelContainer" />);

    flex.MainHeader.defaultProps.logoUrl =
      'https://i.ibb.co/CKSdQWp/M-S-sat.png';

    // manager.updateConfig(configuration);
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  private registerReducers(manager: Flex.Manager) {
    if (!manager.store.addReducer) {
      // tslint: disable-next-line
      console.error(
        `You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`
      );
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
