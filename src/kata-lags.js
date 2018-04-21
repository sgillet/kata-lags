class Flight {

  constructor(flightData) {
    this.id = flightData.id;
    this.startHour = flightData.startHour;
    this.duration = flightData.duration;
    this.income = flightData.income;
    this.endHour = this.startHour + this.duration;
  }

  isCompatible(flightsPlan) {
    try {
      let flightEndHour = this.startHour + this.duration;

      flightsPlan.forEach((plannedFlight) => {
        if (this.startHour >= plannedFlight.startHour && this.startHour < plannedFlight.endHour) {
          throw new Error('incompatible flight');
        }
      });
      return true;
    } catch(error) {
      return false;
    }
  }

  isBetterDeal(flights) {
    if (!flights[0] || this.income > flights[0].income) {
      return true;
    }
    return false;
  }
}

class KataLags {
  static getMaxIncome(flightsArray) {
    const flights = [];
    flightsArray.forEach((flightArray) => {
      flights.push(new Flight(flightArray));
    });
    let maxIncome = 0;
    let flightsPlan = [];

    flights.forEach((flight) => {
      if (!flight.isCompatible(flightsPlan)) {
        if (flight.isBetterDeal(flightsPlan)) {
          maxIncome = flight.income;
          flightsPlan = [flight];
        }
        return;
      }
      maxIncome += flight.income;
      flightsPlan.push(flight);
    });

    return maxIncome;
  }
}

module.exports = KataLags;
