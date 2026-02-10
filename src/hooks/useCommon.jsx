import statsTypes from "/src/services/statsTypes.jsx"; 

export function getFormat(format) {
    if (format === 1) {
        return statsTypes.LEGACY;
    }
    if (format === 0) {
        return statsTypes.VINTAGE;
    }
}

export function createModalLink(name, modalType) {
    name = 'modal-' + modalType + '-' + name

    name = name.replace(/\s+/g, '-').toLowerCase();
    name = name.replace(' ', '-').toLowerCase();
    name = name.replace('\'', '-').toLowerCase();
    name = name.replace(',', '-').toLowerCase();
    name = name.replace('--', '-').toLowerCase();

    return name;
}