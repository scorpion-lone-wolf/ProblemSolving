function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1) return "";
    return str2.substring(0, gcd(str1.length, str2.length));
};
function gcd(a: number, b: number) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

