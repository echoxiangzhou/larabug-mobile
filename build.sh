#!/bin/bash

if [ $# -eq 0 ]
  then
    echo "No platform provided, please add the platform: ios, android"
    exit 1;
fi

echo "Building ionic production"
ionic build --prod
echo "Copying new files"
npx cap copy

if [ $1 == 'android' ]
then
  if [ ! -d "./android" ]
  then
      echo "Android does not exist yet, running 'npx cap add android'"
      npx cap add android
  fi

  echo "Opening android studio"
  npx cap open android
fi

if [ $1 == 'ios' ]
then
  if [ ! -d "./ios" ]
  then
      echo "iOS does not exist yet, running 'npx cap add ios'"
      npx cap add ios
  fi

  echo "Open XCode"
  npx cap open ios
fi
