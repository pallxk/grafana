import React, { memo } from 'react';
import { CoreApp } from '@grafana/data';
import { PromQueryEditorProps } from './types';
import { PromQueryEditor } from './PromQueryEditor';
import { PromQueryEditorForAlerting } from './PromQueryEditorForAlerting';
import { config } from '@grafana/runtime';
import { PromQueryEditorSelector } from '../querybuilder/components/PromQueryEditorSelector';
import { PromExploreQueryEditor } from './PromExploreQueryEditor';

export function PromQueryEditorByApp(props: PromQueryEditorProps) {
  const { app } = props;

  switch (app) {
    case CoreApp.CloudAlerting:
      return <PromQueryEditorForAlerting {...props} />;
    case CoreApp.Explore:
      if (config.featureToggles.promQueryBuilder) {
        return <PromQueryEditorSelector {...props} />;
      }
      return <PromExploreQueryEditor {...props} />;
    default:
      if (config.featureToggles.promQueryBuilder) {
        return <PromQueryEditorSelector {...props} />;
      }
      return <PromQueryEditor {...props} />;
  }
}

export default memo(PromQueryEditorByApp);
