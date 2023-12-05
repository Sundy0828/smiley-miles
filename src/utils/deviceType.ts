import {
  MaxMediumDesktopWidthInt,
  MaxMobileWidthInt,
  MaxSmallDesktopWidthInt,
  MaxTabletWidthInt,
} from "../constants/ScreenSizeConstants";
import { DeviceType } from "./enums";

export const getInitialScreenDeviceType = () => {
  const windowWidth = globalThis.innerWidth;

  if (windowWidth <= MaxMobileWidthInt) {
    return DeviceType.Mobile;
  } else if (windowWidth <= MaxTabletWidthInt) {
    return DeviceType.Tablet;
  } else if (windowWidth <= MaxSmallDesktopWidthInt) {
    return DeviceType.SmallDesktop;
  } else if (windowWidth <= MaxMediumDesktopWidthInt) {
    return DeviceType.MediumDesktop;
  }
  return DeviceType.LargeDesktop;
};
