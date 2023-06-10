import messages_en from "./i18n/en.json";
import messages_fr from "./i18n/fr.json";
import messages_nl from "./i18n/nl.json";

export const DEFAULT_LANGUAGE = "en";
export const getMessages = (locale) => {
	switch (locale) {
		case "fr":
			return messages_fr;
		case "nl":
			return messages_nl;
		case DEFAULT_LANGUAGE:
		default:
			return messages_en;
	}
};

const isLangSupported = (lang) => lang === "fr" || lang === "nl" || lang === "en";

export const getLanguageOverride = () => {
	const localLanguage = window.localStorage.lang;
	return isLangSupported(localLanguage) ? localLanguage : null;
};

export const getDefaultBrowserLanguage = () => {
	const navigatorLanguage = navigator.language.slice(0, 2);
	return isLangSupported(navigatorLanguage) ? navigatorLanguage : DEFAULT_LANGUAGE;
};

export const setLanguage = (lang) => {
	if (!isLangSupported(lang)) return;
	window.localStorage.lang = lang;
	window.location.reload();
};

const MS_IN_ONE_HOUR = 3600 * 1000;
const MS_IN_ONE_DAY = MS_IN_ONE_HOUR * 24;
const MS_IN_ONE_WEEK = MS_IN_ONE_DAY * 7;
const MS_IN_ONE_MONTH = 26298 * 100000;

export const getTimeSince = (date) => {
	const timeDeltaMs = new Date() - date;

	if (timeDeltaMs > MS_IN_ONE_DAY * 60)
		return [timeDeltaMs / MS_IN_ONE_MONTH, "month"];
	else if (timeDeltaMs > MS_IN_ONE_WEEK)
		return [timeDeltaMs / MS_IN_ONE_WEEK, "week"];
	else if (timeDeltaMs > MS_IN_ONE_DAY) return [timeDeltaMs / MS_IN_ONE_DAY, "day"];
	else return [timeDeltaMs / MS_IN_ONE_HOUR, "hour"];
};
