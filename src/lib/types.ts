export interface DineResponse {
	status: string;
	request_time: number;
	records: number;
	allergen_filter: boolean;
	menu: Menu;
	periods: {
		id: string;
		sort_order: number;
		name: string;
	}[];
	closed: boolean;
}

export interface Menu {
	id: 1;
	date: string;
	name: null;
	from_date: null;
	to_date: null;
	periods: Period;
}

export interface Period {
	name: string;
	id: string;
	sort_order: number;
	categories: Category[];
}

export interface Category {
	id: string;
	name: string;
	sort_order: number;
	items: Item[];
}

export interface Item {
	id: string;
	name: string;
	mrn: number;
	rev: number | null;
	mrn_full: string;
	desc: string;
	webtrition_id: string | null;
	sort_order: number;
	portion: string;
	qty: string | null;
	ingredients: string;
	nutrients: Nutrient[];
	filters: Filter[];
	custom_allergens: never[];
	calories: string;
}

export interface Nutrient {
	id: string;
	name: string;
	value: string;
	uom: string;
	value_numeric: string;
}

export interface Filter {
	id: string;
	name: string;
	type: "allergen" | "label";
	icon: boolean;
	remote_file_name: string;
	sector_icon_id: string;
	custom_icons: never[];
}

export interface StatusResponse {
	status: string;
	request_time: number;
	records: number;
	locations: Status[];
}

export interface Status {
	id: string;
	name: string;
	open: boolean;
	status: {
		label: "open" | "closed";
		message: string;
		color: "red" | "green" | "orange";
	};
	occupancy: string;
	address: {
		street: string;
		metadata: string | null;
		city: string;
		state: string;
		zip_code: string;
		lat: number;
		lon: number;
		phone: string | null;
		dst: boolean;
		gmt: number;
		phone_formatted: string | null;
		ext_formatted: string | null;
		gmt_offset: number;
		coordinates: number[];
		manual_coords: number[];
		abbreviation: string | null;
		zone_name: string | null;
	} | null;
}

export interface WeeklyHoursResponse {
	status: string;
	request_time: number;
	records: number;
	the_locations: WeeklyHoursLocation[];
}

export interface WeeklyHoursLocation {
	id: string;
	active: boolean;
	has_delivery_robots: boolean;
	has_food_lockers: boolean;
	is_delivery: boolean;
	is_delivery_only: boolean;
	is_dine_in: boolean;
	is_mobile: boolean;
	is_mobile_only: boolean;
	is_open_late: boolean;
	is_takeout: boolean;
	is_takeout_only: boolean;
	occupancy: string;
	pay_with_apple_pay: boolean;
	pay_with_cash: boolean;
	pay_with_cc: boolean;
	pay_with_dining_dollars: boolean;
	pay_with_google_pay: boolean;
	pay_with_meal_exchange: boolean;
	pay_with_meal_trade: boolean;
	pay_with_meal_swipe: boolean;
	pay_with_retail_swipe: boolean;
	pay_with_samsung_pay: boolean;
	pay_with_meal_plan: boolean;
	custom_payment_types: any[];
	status: Status["status"];
	name: string;
	is_building: boolean;
	building_id: string;
	week: WeeklyHoursDay[];
}

export interface WeeklyHoursDay {
	day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	date: string;
	status: "closed" | "open";
	hours:
		| {
				start_hour: number;
				start_minutes: number;
				end_hour: number;
				end_minutes: number;
		  }[]
		| [];
	has_special_hours: boolean;
	closed: boolean;
}
