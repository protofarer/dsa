    /**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
const solution = function(isBadVersion: any) {

    return function(n: number): number {
        let lo = 1;
        let hi = n;

        while (lo < hi) {
          const m = lo + ((hi - lo) >>> 1);

          if (isBadVersion(m)) {
            hi = m;
          } else {
            lo = m + 1;
          }
        }

        return lo;
    };
};

export default solution;