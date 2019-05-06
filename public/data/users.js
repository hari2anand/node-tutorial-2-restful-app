/*
var env = require('../data/env')
var items= require('../data/items')
var billingContacts= require('../../resources/data/billingContacts')
var shippingContacts= require('../../resources/data/shippingContacts')
*/
var users = {
  user: [
    {
      userName: "darklords@gmail.com",
      userPwd: "Dark123test",
      email: "darklords@gmail.com",
      shoppingType: "ONLINE",
      channel: "MOBILE_APP",
      checkoutType: "STANDARD",
      cartId: "jRAGvSl1RLCdrwHyFnJFZA",
      zipCode: "10150",
      familyCardNumber:"1212345667"
      //items: [items.item1, items.item2],
      //billingContact: billingContacts.user1_BC,
      //shippingContact: shippingContacts.user1_SC
    },
    {
      userName: "darklords1@gmail.com",
      userPwd: "Dark123test",
      email: "darklords1@gmail.com",
      shoppingType: "ONLINE",
      channel: "MOBILE_APP",
      checkoutType: "FAST_TRACK",
      cartId: "pIuzE0oATtmiQIt4uvXX2w",
      zipCode: "10000"
      //items: [items.item1, items.item2],
      //billingContact: billingContacts.user1_BC,
      //shippingContact: shippingContacts.user1_SC
    }
  ]
};
module.exports = users;
