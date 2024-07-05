function isIsomorphic(s: string, t: string): boolean {

    const n1 = s.length;
    const n2 = t.length;

    if (n1 != n2) return false;

    let map = new Map();
    let set = new Set();

    for (let i = 0; i < n1; ++i) {
        let ele1 = s[i];
        let ele2 = t[i];
        if (map.get(ele1) == undefined) {
            if (set.has(ele2)) return false;
            map.set(ele1, ele2);
            set.add(ele2);
        } else {
            if (map.get(ele1) != ele2) return false;
        }

    }
    return true;
};