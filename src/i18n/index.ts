import spanish from '@cv';
import english from '@cvEnglish';

const LANG = {
	CATALAN: 'ca',
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.SPANISH) return {...spanish, ...spanish};
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	return english;
};