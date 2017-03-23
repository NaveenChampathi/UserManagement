<template src="./addUser.html"></template>
<script src="./addUser.js"></script>

<style>
.add-modal-header {
  margin-top: 0;
  font-size: 1.5rem;
  text-transform: capitalize;
}

.add-modal-body {
  margin: 20px 0;
  .description {
    text-transform: capitalize;
  }
  .title {
    font-size: 0.75rem;
    color: #8c8b8b;
    font-weight: 500;
    text-transform: capitalize;
  }
  .add-user {
    padding: 1rem 0;
    display: table;
    width: 100%;
    .credentials {
      margin-bottom: .5rem;
      display: table-row;
      .content {
        border-bottom: 2px solid #c5c5c5;
        margin-bottom: .7rem;
        .borderless {
          border: none;
          outline: none;
          width: 100%;
        }
      }
      .admin {
        font-size: .9rem;
        padding-top: .5rem;
      }
    }
  }
}
.add-modal-footer {
  text-align: right;
  .btn {
    padding: .6rem 2.1rem;
    font-size: 0.8rem;
    color: #fff;
    font-weight: 400;
    border-radius: 3px;
    cursor: pointer;
  }
}

.modal-cancel-button {
  background-color: #a3a3a3;

}
.modal-save-button {
  background-color: #46dac5;
}

</style>
