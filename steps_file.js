// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    getCurrentYear: function (offsetFromCurrentYear) {
      return (new Date().getFullYear() + offsetFromCurrentYear).toString();
    },
    
  });
}
