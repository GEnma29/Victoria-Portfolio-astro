import spanish from '@cv';
import english from '@cvEnglish';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.SPANISH) return {...spanish};
	if (currentLocale === LANG.ENGLISH) return { ...english};
	return english;
};