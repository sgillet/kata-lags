const chai = require('chai');
const expect = chai.expect;
const KataLags = require('../src/kata-lags');

describe("Kata lag", function() {
  it("should get max income when only 1 flight", function() {
    const input = [{
      'id' : 'AF514',
      'startHour' : 0,
      'duration' : 7,
      'income' : 10,
    }];
    expect(KataLags.getMaxIncome(input)).to.equal(10);
  });

  it("should get max income when 2 incompatible flight", function() {
    const input = [
      {
        'id' : 'AF514',
        'startHour' : 0,
        'duration' : 7,
        'income' : 10,
      },
      {
        'id' : 'CO5',
        'startHour' : 3,
        'duration' : 7,
        'income' : 14,
      },
  ];
    expect(KataLags.getMaxIncome(input)).to.equal(14);
  });

  it("should get summed up income when 2 compatible flight", function() {
    const input = [
      {
        'id' : 'AF514',
        'startHour' : 0,
        'duration' : 7,
        'income' : 10,
      },
      {
        'id' : 'BA01698',
        'startHour' : 6,
        'duration' : 9,
        'income' : 8,
      },
  ];
    expect(KataLags.getMaxIncome(input)).to.equal(18);
  });

});
