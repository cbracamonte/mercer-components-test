import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccordionModule } from '@mmctech/ngpd-merceros-ui-v3-accordion';
import { AppBarModule } from '@mmctech/ngpd-merceros-ui-v3-app-bar';
import { AvatarModule } from '@mmctech/ngpd-merceros-ui-v3-avatar';
import { BadgeModule } from '@mmctech/ngpd-merceros-ui-v3-badge';
import { ButtonModule } from '@mmctech/ngpd-merceros-ui-v3-button';
import { CardModule } from '@mmctech/ngpd-merceros-ui-v3-card';
import { CdkModule, DialogModule } from '@mmctech/ngpd-merceros-ui-v3-cdk';
import { CheckboxModule } from '@mmctech/ngpd-merceros-ui-v3-checkbox';
import { ChipsModule } from '@mmctech/ngpd-merceros-ui-v3-chips';
import { DividerModule } from '@mmctech/ngpd-merceros-ui-v3-divider';
import { DrawerModule } from '@mmctech/ngpd-merceros-ui-v3-drawer';
import { FieldModule } from '@mmctech/ngpd-merceros-ui-v3-field2';
import { IconModule } from '@mmctech/ngpd-merceros-ui-v3-icon';
import { LinkModule } from '@mmctech/ngpd-merceros-ui-v3-link';
import { ListModule } from '@mmctech/ngpd-merceros-ui-v3-list';
import { MenuModule } from '@mmctech/ngpd-merceros-ui-v3-menu';
import { ProgressModule } from '@mmctech/ngpd-merceros-ui-v3-progress';
import { TabsModule } from '@mmctech/ngpd-merceros-ui-v3-tabs';
import { TooltipModule } from '@mmctech/ngpd-merceros-ui-v3-tooltip';
import { MercerOSModule } from 'merceros-ui-components';

const MODULES = [
  CdkModule,
  IconModule,
  ButtonModule,
  AppBarModule,
  AvatarModule,
  DialogModule,
  ListModule,
  DrawerModule,
  MenuModule,
  CardModule,
  TooltipModule,
  DividerModule,
  BadgeModule,
  CardModule,
  TabsModule,
  FieldModule,
  CheckboxModule,
  ChipsModule,
  LinkModule,
  ProgressModule,
  AccordionModule,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...MODULES,
    MercerOSModule.forRoot(),
  ],
  declarations: [],
  exports: [...MODULES],
  providers: [],
})
export class ComponentsModule {}
