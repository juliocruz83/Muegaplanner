import { UserCalendar } from '@muega-models/UserCalendar';

export class User {
    _id: string;
    email: string;
    name: string;
    exp: number;
    iat: number;
    calendars: Array<UserCalendar>;
}
