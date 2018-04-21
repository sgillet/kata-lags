class Flight {

  constructor(flightData) {
    this.id = flightData.id;
    this.startHour = flightData.startHour;
    this.duration = flightData.duration;
    this.income = flightData.income;
    this.endHour = this.startHour + this.duration;
  }

  isCompatible(flightsPlan) {
    let flightEndHour = flight.startHour + flight.duration;

    flightsPlan.forEach((plannedFlight) => {
      if (this.startHour >= plannedFlight.startHour && this.startHour < plannedFlight.endHour) {
        return false;
      }
    });

    return true;
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
        return;
      }
      if (flight.income > maxIncome) {
        maxIncome += flight.income;
        flightsPlan.push(flight);
      }
    });

    return maxIncome;
  }

}

module.exports = KataLags;
