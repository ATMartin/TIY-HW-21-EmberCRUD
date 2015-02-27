

import Ember from "ember";

export function initialize(container, application) {
  Ember.$.ajaxSetup({
    headers:{
      "X-Parse-Application-Id" : "K4zLqJj9DKABboTYQLeVyeQVBlhqOtJO7CrTQIEq",
      "X-Parse-REST-API-Key" : "Y7V0uUBdUqCe9sVMx1ZWEkllLDgxaJtp5tYCoTa7"
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};

