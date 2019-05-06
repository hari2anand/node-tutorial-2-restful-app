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
      email: "darklords@gmail.com",
      userPwd: "Dark123test",
      zipCode: "10150"
      //items: [items.item1, items.item2],
      //billingContact: billingContacts.user1_BC,
      //shippingContact: shippingContacts.user1_SC
    },
    {
      userName: "darklords1@gmail.com",
      email: "darklords1@gmail.com",
      userPwd: "Dark123test",
      zipCode: "10000"
      //items: [items.item1, items.item2],
      //billingContact: billingContacts.user1_BC,
      //shippingContact: shippingContacts.user1_SC
    }
  ]
};
module.exports = users;
