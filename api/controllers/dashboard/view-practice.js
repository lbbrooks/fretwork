module.exports = {


  friendlyName: 'View practice',


  description: 'Display "Practice" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/practice'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
