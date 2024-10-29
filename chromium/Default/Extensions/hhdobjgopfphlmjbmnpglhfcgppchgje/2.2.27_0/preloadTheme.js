/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/common/constants.ts
var SETTINGS_IDS = {
  PROXY_ENABLED: 'proxy.enabled',
  RATE_SHOW: 'rate.show',
  PREMIUM_FEATURES_SHOW: 'premium.features.show',
  USER_SET_PROMO_SHOW: 'user.set.promo.show',
  EXCLUSIONS: 'exclusions.list',
  HANDLE_WEBRTC_ENABLED: 'webrtc.handle.enabled',
  SELECTED_DNS_SERVER: 'dns.handle.server',
  SELECTED_CUSTOM_DNS_SERVER: 'custom.dns.handle.server',
  CONTEXT_MENU_ENABLED: 'context.menu.enabled',
  SELECTED_LOCATION_KEY: 'endpoints.selected.location',
  LOCATION_SELECTED_BY_USER_KEY: 'endpoints.location.selected.by.user',
  POLICY_AGREEMENT: 'policy.agreement',
  HELP_US_IMPROVE: 'help.us.improve',
  APPEARANCE_THEME: 'appearance.theme',
  CUSTOM_DNS_SERVERS: 'custom.dns.servers',
  QUICK_CONNECT: 'quick.connect',
  DEBUG_MODE_ENABLED: 'debug.mode.enabled'
};
var AppearanceTheme = /*#__PURE__*/function (AppearanceTheme) {
  AppearanceTheme["System"] = "System";
  AppearanceTheme["Dark"] = "Dark";
  AppearanceTheme["Light"] = "Light";
  return AppearanceTheme;
}({});
var APPEARANCE_THEME_DEFAULT = AppearanceTheme.System;
var THEME_URL_PARAMETER = 'theme';
var QuickConnectSetting = /*#__PURE__*/function (QuickConnectSetting) {
  QuickConnectSetting["LastUsedLocation"] = "lastUsedLocation";
  QuickConnectSetting["FastestLocation"] = "fastestLocation";
  return QuickConnectSetting;
}({});
var QUICK_CONNECT_SETTING_DEFAULT = QuickConnectSetting.LastUsedLocation;
var MessageType = /*#__PURE__*/function (MessageType) {
  MessageType["ADD_EVENT_LISTENER"] = "add.event.listener";
  MessageType["NOTIFY_LISTENERS"] = "notify.listeners";
  MessageType["REMOVE_EVENT_LISTENER"] = "remove.event.listener";
  MessageType["ADD_LONG_LIVED_CONNECTION"] = "add.long.lived.connection";
  MessageType["AUTHENTICATE_SOCIAL"] = "authenticate.social";
  MessageType["AUTHENTICATE_THANKYOU_PAGE"] = "authenticate.thankyou.page";
  MessageType["GET_POPUP_DATA"] = "get.popup.data";
  MessageType["GET_LIMITED_OFFER_DATA"] = "get.limited.offer.data";
  MessageType["FORCE_UPDATE_LOCATIONS"] = "force.update.locations";
  MessageType["GET_OPTIONS_DATA"] = "get.options.data";
  MessageType["GET_VPN_FAILURE_PAGE"] = "get.vpn.failure.page";
  MessageType["OPEN_OPTIONS_PAGE"] = "open.options.page";
  MessageType["SET_SELECTED_LOCATION"] = "set.selected.location";
  MessageType["DEAUTHENTICATE_USER"] = "deauthenticate.user";
  MessageType["AUTHENTICATE_USER"] = "authenticate.user";
  MessageType["UPDATE_AUTH_CACHE"] = "update.auth.cache";
  MessageType["GET_AUTH_CACHE"] = "get.auth.cache";
  MessageType["CLEAR_AUTH_CACHE"] = "clear.auth.cache";
  MessageType["GET_CAN_CONTROL_PROXY"] = "get.can.control.proxy";
  MessageType["ENABLE_PROXY"] = "enable.proxy";
  MessageType["DISABLE_PROXY"] = "disable.proxy";
  MessageType["ADD_URL_TO_EXCLUSIONS"] = "add.to.exclusions";
  MessageType["REMOVE_EXCLUSION"] = "remove.exclusion";
  MessageType["DISABLE_VPN_BY_URL"] = "disable.vpn.by.url";
  MessageType["ENABLE_VPN_BY_URL"] = "enable.vpn.by.url";
  MessageType["CHECK_EMAIL"] = "check.email";
  MessageType["DISABLE_OTHER_EXTENSIONS"] = "disable.other.extensions";
  MessageType["REGISTER_USER"] = "register.user";
  MessageType["IS_AUTHENTICATED"] = "is.authenticated";
  MessageType["START_SOCIAL_AUTH"] = "start.social.auth";
  MessageType["CLEAR_PERMISSIONS_ERROR"] = "clear.permissions.error";
  MessageType["CHECK_PERMISSIONS"] = "check.permissions";
  MessageType["GET_EXCLUSIONS_INVERTED"] = "get.exclusions.inverted";
  MessageType["GET_EXCLUSIONS_DATA"] = "get.exclusions.data";
  MessageType["SET_EXCLUSIONS_MODE"] = "set.exclusions.mode";
  MessageType["TOGGLE_EXCLUSION_STATE"] = "toggle.exclusion.state";
  MessageType["RESET_SERVICE_DATA"] = "reset.service.data";
  MessageType["CLEAR_EXCLUSIONS_LIST"] = "clear.exclusions.list";
  MessageType["TOGGLE_SERVICES"] = "toggle.services";
  MessageType["GET_SETTING_VALUE"] = "get.setting.value";
  MessageType["SET_SETTING_VALUE"] = "set.setting.value";
  MessageType["GET_USERNAME"] = "get.username";
  MessageType["GET_SELECTED_LOCATION"] = "get.selected.location";
  MessageType["CHECK_IS_PREMIUM_TOKEN"] = "check.is.premium.token";
  MessageType["SET_NOTIFICATION_VIEWED"] = "set.notification.viewed";
  MessageType["OPEN_TAB"] = "open.tab.action";
  MessageType["REPORT_BUG"] = "post.report.bug";
  MessageType["OPEN_PREMIUM_PROMO_PAGE"] = "open.premium.promo.page";
  MessageType["ADD_REGULAR_EXCLUSIONS"] = "add.regular.exclusions";
  MessageType["ADD_SELECTIVE_EXCLUSIONS"] = "add.selective.exclusions";
  MessageType["SET_FLAG"] = "set.flag";
  MessageType["GET_GENERAL_EXCLUSIONS"] = "get.general.exclusions";
  MessageType["GET_SELECTIVE_EXCLUSIONS"] = "get.selective.exclusions";
  MessageType["OPEN_FREE_GBS_PAGE"] = "open.free.gbs.page";
  MessageType["GET_BONUSES_DATA"] = "get.bonuses.data";
  MessageType["RESTORE_EXCLUSIONS"] = "restore.exclusions";
  MessageType["ADD_EXCLUSIONS_MAP"] = "add.exclusions.map";
  MessageType["SET_RATE_MODAL_VIEWED"] = "set.rate.modal.viewed";
  MessageType["HANDLE_CUSTOM_DNS_LINK"] = "handle.custom.dns.link";
  MessageType["ADD_CUSTOM_DNS_SERVER"] = "add.custom.dns.server";
  MessageType["EDIT_CUSTOM_DNS_SERVER"] = "edit.custom.dns.server";
  MessageType["REMOVE_CUSTOM_DNS_SERVER"] = "remove.custom.dns.server";
  MessageType["RESEND_CONFIRM_REGISTRATION_LINK"] = "resend.confirm.registration.link";
  MessageType["SET_EMAIL_CONFIRMATION_AUTH_ID"] = "set.email.confirmation.auth.id";
  MessageType["RESEND_EMAIL_CONFIRMATION_CODE"] = "resend.email.confirmation.code";
  MessageType["GET_RESEND_CODE_COUNTDOWN"] = "get.resend.code.countdown";
  MessageType["RESTORE_CUSTOM_DNS_SERVERS_DATA"] = "restore.custom.dns.servers.data";
  MessageType["SET_HINT_POPUP_VIEWED"] = "set.hint.popup.viewed";
  MessageType["GET_LOGS"] = "get.logs";
  MessageType["GET_APP_VERSION"] = "get.app.version";
  MessageType["UPDATE_LISTENERS"] = "update.listeners";
  MessageType["RECALCULATE_PINGS"] = "recalculate.pings";
  return MessageType;
}({});
var SocialAuthProvider = /*#__PURE__*/function (SocialAuthProvider) {
  SocialAuthProvider["Apple"] = "apple";
  SocialAuthProvider["Google"] = "google";
  SocialAuthProvider["Facebook"] = "facebook";
  return SocialAuthProvider;
}({});
var FLAGS_FIELDS = {
  IS_NEW_USER: 'isNewUser',
  IS_SOCIAL_AUTH: 'isSocialAuth',
  SHOW_ONBOARDING: 'showOnboarding',
  SHOW_UPGRADE_SCREEN: 'showUpgradeScreen',
  SALE_SHOW: 'saleShow',
  SHOULD_SHOW_RATE_MODAL: 'shouldShowRateModal'
};
var SubscriptionType = /*#__PURE__*/function (SubscriptionType) {
  SubscriptionType["Monthly"] = "MONTHLY";
  SubscriptionType["Yearly"] = "YEARLY";
  SubscriptionType["TwoYears"] = "TWO_YEARS";
  return SubscriptionType;
}({});
var CUSTOM_DNS_ANCHOR_NAME = 'custom-dns';
var REQUIRED_2FA_CODE = '2fa_required';
var REQUIRED_EMAIL_CONFIRMATION_CODE = 'confirmation_code_required';
var BAD_CREDENTIALS_CODE = 'bad_credentials';

/**
 * Delay in seconds before user can resend email confirmation code.
 */
var RESEND_EMAIL_CONFIRMATION_CODE_DELAY_SEC = 60;
var ONE_SECOND_MS = 1000;
var ONE_MINUTE_MS = ONE_SECOND_MS * 60;
var ONE_HOUR_MS = ONE_MINUTE_MS * 60;
var ONE_DAY_MS = ONE_HOUR_MS * 24;
;// CONCATENATED MODULE: ./src/options/preloadTheme.ts


/**
 * this script is injected at the top of the page to display
 * the desired color theme before the main bundle is loaded
 */
(function () {
  var urlSearchParams = new URLSearchParams(window.location.search);
  var theme = urlSearchParams.get(THEME_URL_PARAMETER);
  if (!theme) {
    return;
  }

  // the color changes through the selector
  // so that it could be rewritten by css from the main bundle
  if (theme === AppearanceTheme.Dark) {
    document.body.classList.add('body_dark');
  } else if (theme === AppearanceTheme.Light) {
    document.body.classList.add('body_light');
  }

  // Remove theme parameter from the URL. Removing is needed to avoid chrome opening the new options page every
  // time
  urlSearchParams.delete(THEME_URL_PARAMETER);
  var newSearchString = urlSearchParams.toString();
  newSearchString = newSearchString ? "?".concat(newSearchString) : '';
  var newUrl = "".concat(window.location.origin).concat(window.location.pathname).concat(newSearchString).concat(window.location.hash);
  window.history.replaceState({}, '', newUrl); // Update the URL without reloading the page
})();
/******/ })()
;