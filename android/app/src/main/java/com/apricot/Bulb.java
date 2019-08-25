package com.apricot;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import javax.annotation.Nonnull;

public class Bulb extends ReactContextBaseJavaModule {
    private static Boolean isOn = false;

    public Bulb(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getStatus(Callback successCallback) {
        successCallback.invoke(null, isOn);
    }

    @ReactMethod
    public void turnOn() {
        isOn = true;
        System.out.println("Bulb on");
    }

    @ReactMethod
    public void turnOff() {
        isOn = false;
        System.out.println("Bulb off");
    }

    @Nonnull
    @Override
    public String getName() {
        return "Bulb";
    }
}