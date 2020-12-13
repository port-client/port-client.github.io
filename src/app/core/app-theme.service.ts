import { Injectable } from '@angular/core';

const Color = require('color');
const colorString = require('color-string');

@Injectable({
  providedIn: 'root'
})

export class AppTheme {

  appBrandPrimaryDark: any;
  appBrandPrimaryLight: any;
  appBrandPrimaryDisable: any;
  appBrandSecondary: any;
  textColor: any;
  textDarkMedium: any;
  textDarkNormal: any;
  textLightNormal: any;
  textLightMedium: any;
  secondaryBtnDisabled: any;
  genericBorderColor: any;
  dataCardBorder: any;
  dataCardHeaderBg: any;
  appCheckboxBorder: any;
  appCheckboxBg: any;
  appCheckboxBorderDisable: any;
  appRadioBorder: any;
  appRadioBg: any;
  appRadioBorderDisable: any;
  formControlBorder: any;
  formControlDisableBorder: any;
  formControlDisableBackground: any;
  gridPaginationBorder: any;
  gridPaginationBorderActive: any;
  gridPaginationBackgroundActive: any;
  gridHeaderBg: any;
  gridHeaderSeperator: any;
  gridFieldIcon: any;
  gridSelectedRowBorder: any;
  gridRowHoverBg: any;
  sidebarLogoText: any;
  sidebarLogoTextAlpha50: any;
  listOptionHoverBg: any;
  companiesDropdownSelectionBg: any;
  tooltipBackground: any;
  tooltipArrowBackground: any;
  appBaseBg: any;
  logoWrapBorder: any;
  progressBarBgBorder: any;
  themeSelectedBorder: any;
  containerBorder: any;
  dxColorboxBorder: any;
  dxColorboxResultBorder: any;
  notificationSectionHeadBg: any;
  appPrimarySuperDark: any;

  constructor() { }

  changeTheme(primary: string) {

    document.documentElement.style.setProperty('--app-brand-primary', primary);
    const primaryColorTone = Color(primary);
    const primaryHue = primaryColorTone.hue();
    const primarySaturationl = primaryColorTone.saturationl();
    const primarySaturationv = primaryColorTone.saturationv();
    const primaryLightness = primaryColorTone.lightness();
    const primaryColor = primaryColorTone.saturationl(100).saturationv(100);

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appBrandPrimaryDark = primaryColor.hue(primaryHue).saturationl(0).lightness(18);
    } else {
      this.appBrandPrimaryDark = primaryColor.hue(primaryHue).saturationl(100).lightness(18);
    }
    document.documentElement.style.setProperty('--app-brand-primary-dark', this.appBrandPrimaryDark.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appBrandPrimaryLight = primaryColor.hue(primaryHue).saturationl(0).lightness(47);
    } else {
      this.appBrandPrimaryLight = primaryColor.hue(primaryHue).saturationl(29).lightness(47);
    }
    document.documentElement.style.setProperty('--app-brand-primary-light', this.appBrandPrimaryLight.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appBrandPrimaryDisable = primaryColor.hue(primaryHue).saturationl(0).lightness(93);
    } else {
      this.appBrandPrimaryDisable = primaryColor.hue(primaryHue).saturationl(26).lightness(93);
    }
    document.documentElement.style.setProperty('--app-brand-primary-disable', this.appBrandPrimaryDisable.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appBrandSecondary = primaryColor.hue(primaryHue).saturationl(0).lightness(96);
    } else {
      this.appBrandSecondary = primaryColor.hue(primaryHue).saturationl(26).lightness(96);
    }
    document.documentElement.style.setProperty('--app-brand-secondary', this.appBrandSecondary.hex());

    // Text Colors

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.textColor = primaryColor.hue(primaryHue).saturationl(0).lightness(17);
    } else {
      this.textColor = primaryColor.hue(primaryHue).saturationl(20).lightness(17);
    }
    document.documentElement.style.setProperty('--text-color', this.textColor.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.textDarkMedium = primaryColor.hue(primaryHue).saturationl(0).lightness(42);
    } else {
      this.textDarkMedium = primaryColor.hue(primaryHue).saturationl(3).lightness(42);
    }
    document.documentElement.style.setProperty('--text-dark-medium', this.textDarkMedium.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.textDarkNormal = primaryColor.hue(primaryHue).saturationl(0).lightness(61);
    } else {
      this.textDarkNormal = primaryColor.hue(primaryHue).saturationl(2).lightness(61);
    }
    document.documentElement.style.setProperty('--text-dark-normal', this.textDarkNormal.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.textLightNormal = primaryColor.hue(primaryHue).saturationl(0).lightness(90);
    } else {
      this.textLightNormal = primaryColor.hue(primaryHue).saturationl(19).lightness(90);
    }
    document.documentElement.style.setProperty('--text-light-normal', this.textLightNormal.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.textLightMedium = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.textLightMedium = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--text-light-medium', this.textLightMedium.hex());

    // Button

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.secondaryBtnDisabled = primaryColor.hue(primaryHue).saturationl(0).lightness(90);
    } else {
      this.secondaryBtnDisabled = primaryColor.hue(primaryHue).saturationl(19).lightness(90);
    }
    document.documentElement.style.setProperty('--secondary-btn-disabled', this.secondaryBtnDisabled.hex());

    const primaryBtnHover = primaryColorTone.lighten(0.18);
    document.documentElement.style.setProperty('--primary-btn-hover', primaryBtnHover.hex());
    const primaryBtnActiveFocus = primaryColorTone.lighten(0.22);
    document.documentElement.style.setProperty('--primary-btn-active-focus', primaryBtnActiveFocus.hex());
    const primaryBtnDisabled = primaryColorTone.lighten(0.22);
    document.documentElement.style.setProperty('--primary-btn-disabled', primaryBtnDisabled.hex());

    // Border

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.genericBorderColor = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.genericBorderColor = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--generic-border-color', this.genericBorderColor.hex());

    // Card

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.dataCardBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(90);
    } else {
      this.dataCardBorder = primaryColor.hue(primaryHue).saturationl(19).lightness(90);
    }
    document.documentElement.style.setProperty('--data-card-border', this.dataCardBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.dataCardHeaderBg = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.dataCardHeaderBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--data-card-header-bg', this.dataCardHeaderBg.hex());

    // Checkboxes

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appCheckboxBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(61);
    } else {
      this.appCheckboxBorder = primaryColor.hue(primaryHue).saturationl(2).lightness(61);
    }
    document.documentElement.style.setProperty('--app-checkbox-border', this.appCheckboxBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appCheckboxBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(0).lightness(95);
    } else {
      this.appCheckboxBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--app-checkbox-bg', this.appCheckboxBg.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appCheckboxBorderDisable = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(0).lightness(95);
    } else {
      this.appCheckboxBorderDisable = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--app-checkbox-border-disable', this.appCheckboxBorderDisable.hex());

    const appToggleActiveBg = primaryColorTone;
    document.documentElement.style.setProperty('--app-toggle-active-bg', appToggleActiveBg.hex());
    const appToggleActiveShadow = primaryColorTone.alpha(0.35);
    document.documentElement.style.setProperty('--app-toggle-active-shadow', appToggleActiveShadow.rgb().string());
    const appToggleUncheckedShadow = primaryColorTone.alpha(0.15);
    document.documentElement.style.setProperty('--app-toggle-unchecked-shadow', appToggleUncheckedShadow.rgb().string());
    const appToggleCheckFocus = primaryColorTone.alpha(0.15);
    document.documentElement.style.setProperty('--app-l-toggle-check-focus', appToggleCheckFocus.rgb().string());

    // Radio

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appRadioBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(61);
    } else {
      this.appRadioBorder = primaryColor.hue(primaryHue).saturationl(2).lightness(61);
    }
    document.documentElement.style.setProperty('--app-radio-border', this.appRadioBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appRadioBg = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.appRadioBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--app-radio-bg', this.appRadioBg.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appRadioBorderDisable = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.appRadioBorderDisable = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--app-radio-border-disable', this.appRadioBorderDisable.hex());

    // Form controls

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.formControlBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(61);
    } else {
      this.formControlBorder = primaryColor.hue(primaryHue).saturationl(2).lightness(61);
    }
    document.documentElement.style.setProperty('--form-control-border', this.formControlBorder.hex());

    const formControlActiveBorder = primaryColorTone;
    document.documentElement.style.setProperty('--form-control-active-border', formControlActiveBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.formControlDisableBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(61);
    } else {
      this.formControlDisableBorder = primaryColor.hue(primaryHue).saturationl(2).lightness(61);
    }
    document.documentElement.style.setProperty('--form-control-disable-border', this.formControlDisableBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.formControlDisableBackground = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.formControlDisableBackground = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--form-control-disable-background', this.formControlDisableBackground.hex());

    // Tables & Grids

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.gridPaginationBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(90);
    } else {
      this.gridPaginationBorder = primaryColor.hue(primaryHue).saturationl(19).lightness(90);
    }
    document.documentElement.style.setProperty('--grid-pagination-border', this.gridPaginationBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.gridPaginationBorderActive = primaryColor.hue(primaryHue).saturationl(0).lightness(42);
    } else {
      this.gridPaginationBorderActive = primaryColor.hue(primaryHue).saturationl(3).lightness(42);
    }
    document.documentElement.style.setProperty('--grid-pagination-border-active', this.gridPaginationBorderActive.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.gridPaginationBackgroundActive = primaryColor.hue(primaryHue).saturationl(0).lightness(61);
    } else {
      this.gridPaginationBackgroundActive = primaryColor.hue(primaryHue).saturationl(2).lightness(61);
    }
    document.documentElement.style.setProperty('--grid-pagination-background-active', this.gridPaginationBackgroundActive.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.gridHeaderBg = primaryColor.hue(primaryHue).saturationl(0).lightness(95).alpha(0.5);
    } else {
      this.gridHeaderBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95).alpha(0.5);
    }
    document.documentElement.style.setProperty('--grid-header-bg', this.gridHeaderBg.rgb().string());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.gridHeaderSeperator = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.gridHeaderSeperator = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--grid-header-seperator', this.gridHeaderSeperator.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.gridFieldIcon = primaryColor.hue(primaryHue).saturationl(0).lightness(61).darken(0.5);
    } else {
      this.gridFieldIcon = primaryColor.hue(primaryHue).saturationl(2).lightness(61).darken(0.5);
    }
    document.documentElement.style.setProperty('--grid-field-icon', this.gridFieldIcon.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.gridSelectedRowBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(95).darken(0.5);
    } else {
      this.gridSelectedRowBorder = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95).darken(0.5);
    }
    document.documentElement.style.setProperty('--grid-selected-row-border', this.gridSelectedRowBorder.hex());

    const gridFocusedHeaderCell = primaryColorTone.alpha(0.75);
    document.documentElement.style.setProperty('--grid-focused-header-cell', gridFocusedHeaderCell.rgb().string());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.gridRowHoverBg = primaryColor.hue(primaryHue).saturationl(0).lightness(95).alpha(0.3);
    } else {
      this.gridRowHoverBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95).alpha(0.3);
    }
    document.documentElement.style.setProperty('--grid-row-hover-bg', this.gridRowHoverBg.rgb().string());

    // Sidebar

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.sidebarLogoText = primaryColor.hue(primaryHue).saturationl(0).lightness(93);
    } else {
      this.sidebarLogoText = primaryColor.hue(primaryHue).saturationl(26).lightness(93);
    }
    document.documentElement.style.setProperty('--sidebar-logo-text', this.sidebarLogoText.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.sidebarLogoTextAlpha50 = primaryColor.hue(primaryHue).saturationl(0).lightness(93).alpha(0.5);
    } else {
      this.sidebarLogoTextAlpha50 = primaryColor.hue(primaryHue).saturationl(26).lightness(93).alpha(0.5);
    }
    document.documentElement.style.setProperty('--sidebar-logo-text-alpha50', this.sidebarLogoTextAlpha50.rgb().string());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.listOptionHoverBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(0).lightness(95);
    } else {
      this.listOptionHoverBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--list-option-hover-bg', this.listOptionHoverBg.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.companiesDropdownSelectionBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(0).lightness(95);
    } else {
      this.companiesDropdownSelectionBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--companies-dropdown-selection-bg', this.companiesDropdownSelectionBg.hex());

    // Tooltip

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.tooltipBackground = primaryColor.hue(primaryHue).saturationl(0).lightness(17);
    } else {
      this.tooltipBackground = primaryColor.hue(primaryHue).saturationl(20).lightness(17);
    }
    document.documentElement.style.setProperty('--tooltip-background', this.tooltipBackground.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.tooltipArrowBackground = primaryColor.hue(primaryHue).saturationl(0).lightness(17);
    } else {
      this.tooltipArrowBackground = primaryColor.hue(primaryHue).saturationl(20).lightness(17);
    }
    document.documentElement.style.setProperty('--tooltip-arrow-background', this.tooltipArrowBackground.hex());

    // Alerts
    const alertPrimaryBg = primaryColorTone.alpha(0.18);
    document.documentElement.style.setProperty('--alert-primary-bg', alertPrimaryBg.rgb().string());
    const alertSecondaryBg = primaryColorTone.alpha(0.15);
    document.documentElement.style.setProperty('--alert-secondary-bg', alertSecondaryBg.rgb().string());

    // App
    const primaryShadeDimmed = primaryColorTone.lighten(0.01);
    document.documentElement.style.setProperty('--primary-shade-dimmed', primaryShadeDimmed.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appBaseBg = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.appBaseBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--app-base-bg', this.appBaseBg.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.logoWrapBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(90);
    } else {
      this.logoWrapBorder = primaryColor.hue(primaryHue).saturationl(19).lightness(90);
    }
    document.documentElement.style.setProperty('--logo-wrap-border', this.logoWrapBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.progressBarBgBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(90);
    } else {
      this.progressBarBgBorder = primaryColor.hue(primaryHue).saturationl(19).lightness(90);
    }
    document.documentElement.style.setProperty('--progress-bar-bg-border', this.progressBarBgBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.themeSelectedBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(17);
    } else {
      this.themeSelectedBorder = primaryColor.hue(primaryHue).saturationl(20).lightness(17);
    }
    document.documentElement.style.setProperty('--theme-selected-border', this.themeSelectedBorder.hex());

    // Fields

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.containerBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(61);
    } else {
      this.containerBorder = primaryColor.hue(primaryHue).saturationl(2).lightness(61);
    }
    document.documentElement.style.setProperty('--container-border', this.containerBorder.hex());

    // devextreme

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.dxColorboxBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(61);
    } else {
      this.dxColorboxBorder = primaryColor.hue(primaryHue).saturationl(2).lightness(61);
    }
    document.documentElement.style.setProperty('--dx-colorbox-border', this.dxColorboxBorder.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.dxColorboxResultBorder = primaryColor.hue(primaryHue).saturationl(0).lightness(17);
    } else {
      this.dxColorboxResultBorder = primaryColor.hue(primaryHue).saturationl(20).lightness(17);
    }
    document.documentElement.style.setProperty('--dx-colorbox-result-border', this.dxColorboxResultBorder.hex());

    const dragDropBorder = primaryColorTone;
    document.documentElement.style.setProperty('--app-l-drag-drop-border', dragDropBorder.hex());
    const dragDropHoverBg = primaryColorTone;
    document.documentElement.style.setProperty('--app-l-drag-drop-hover-bg', dragDropHoverBg.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.notificationSectionHeadBg = primaryColor.hue(primaryHue).saturationl(0).lightness(95);
    } else {
      this.notificationSectionHeadBg = primaryColor.hue(this.getTextLightMediumHue(primaryHue)).saturationl(8).lightness(95);
    }
    document.documentElement.style.setProperty('--notification-section-head-bg', this.notificationSectionHeadBg.hex());

    if (primaryHue === 0 && primarySaturationl === 0 && primarySaturationv === 0) {
      this.appPrimarySuperDark = primaryColor.hue(primaryHue).saturationl(0).lightness(21);
    } else {
      this.appPrimarySuperDark = primaryColor.hue(primaryHue).saturationl(81).lightness(21);
    }
    document.documentElement.style.setProperty('--app-primary-super-dark', this.appPrimarySuperDark.hex());
  }

  getTextLightMediumHue(hue: number) {
    if ((hue - 24) < 0) {
      return 360 + (hue - 24);
    } else if ((hue - 24) === 0) {
      return 0;
    } else {
      return hue - 24;
    }
  }
}
