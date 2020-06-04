import ReactGA from 'react-ga';

export  const mapEvent =(e, cls)=> {
    // eslint-disable-next-line
    var e = document.createEvent('Event');
    e.initEvent('click', true, true);
    var cb = document.getElementsByClassName(cls);
    return !cb[0].dispatchEvent(e);
};

export const handleNavClick = (e, disabled) => {
    if (disabled) {
        e.preventDefault();
    }
}

export const geoToPoly = (data) => {
    return data.map((coords)=> {
        return coords.reverse();
    })
}

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export function sendGaEvent (obj) {
    ReactGA.event(obj)
}