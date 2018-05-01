export class Event {
	eventName: string;
	eventLocatio: string;
    activity: string;
    dateTime: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

	seteventName(eventName: string) {
		this.eventName = eventName;
	}

	getnameEvent() {
		return this.eventName;
	}

	seteventLocation(eventLocation: string) {
		this.eventLocatio = eventLocation;
	}

	geteventLocation() {
		return this.eventLocatio;
	}

	setactivity(activity: string) {
		this.activity = activity;
	}

	getactivity() {
		return this.activity;
	}

	setdateTime(dateTime: string) {
		this.dateTime = dateTime;
	}

	getdateTime() {
		return this.dateTime;
	}
}
