<template src="./app.html"></template>

<script src="./app.js"></script>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.header {
  flex: 0 1 auto;
}
.container-fluid {
  padding: 0px;
  margin: 0px 1px;
}
.header {
  color: blue;
}
.bg-faded {
  background-color: #0168c1;
  box-shadow: 0px 1px 5px #585858;
}
.header-text {
  font-style: italic;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  display: inline-block;
  font-size: 1.5rem;
}
.btn-outline-primary {
  color: #fff;
  border-color: #fff;
  float: right;
}
.navbar .inline-div {
  display: inline !important;
}
.form-right {
  position: relative;
  float: right;
}
.apply-btn {
  color: white;
  font-size: 1rem;
  border: 1px solid white;
  cursor: pointer;
  background-color: inherit;
  margin: 0rem 0.5rem;
  border-radius: 6px;
  padding: 5px 12px;
}
</style>
