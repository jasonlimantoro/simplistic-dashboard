export const accum = (array) => array.reduce((sum, i) => sum + i, 0);

export const includesIn = (haystack, needle, caseInsensitive = true) => {
	return caseInsensitive
		? haystack.toLowerCase().includes(needle.toLowerCase())
		: haystack.includes(needle);
};
