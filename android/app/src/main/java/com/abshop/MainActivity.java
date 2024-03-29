package com.abshop;

import android.content.Intent;
import android.os.Bundle;

import com.appboy.Appboy;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "abshop";
  }

  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    setIntent(intent);
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    String deviceId = Appboy.getInstance(MainActivity.this).getInstallTrackingId();
  }
}
