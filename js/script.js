// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: dom
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates volume of a sphere.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius-of-sphere").value)

  // process
  const volume = 3/4 * 3.14 * radius

  // output
  document.getElementById("volume").innerHTML = "volume is: " + volume + " mm³"
}
