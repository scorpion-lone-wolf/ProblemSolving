class EncoderDecoder {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]) {
        let n = strs.length;
        let encodedString = "";
        for (let i = 0; i < n; ++i) {
            encodedString += String(strs[i].length) + "#" + strs[i];
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string) {

        const decodedString: string[] = [];
        let i = 0;
        while (i < str.length) {
            let lengthInString: string = "";
            let j = i;
            while (str[j] != '#') {
                lengthInString += str[j];
                j++;
            }
            const length = +lengthInString;
            decodedString.push(str.substring(j + 1, length + j + 1));
            i = length + j + 1;
        }
        return decodedString;

    }
}
