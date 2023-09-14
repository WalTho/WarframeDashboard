import moment from "moment";

export const convertToDuration = (str) => {
    const regex = /(-?\d+)[ ]?d[ ]?(-?\d+)[ ]?h[ ]?(-?\d+)[ ]?m/;
    const match = str.match(regex);

    if (match) {
        return moment.duration({
            days: parseInt(match[1]),
            hours: parseInt(match[2]),
            minutes: parseInt(match[3])
        });
    }

    return null;
};

export const getTimeRemaining = (expiryDate) => {
    const now = moment();
    const end = moment(expiryDate);

    if (!end.isValid()) return null;

    const duration = moment.duration(end.diff(now));
    if (duration.asSeconds() <= 0) return null;

    return {
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes()
    };
};

