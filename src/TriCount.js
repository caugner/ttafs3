class TriCount {
  count(minLength, maxLength) {
    if (minLength < 1 || 1000000 < minLength) {
      throw new Error("minLength must be between 1 and 1,000,000");
    } else if (maxLength < minLength || 1000000 < maxLength) {
      throw new Error("maxLength must be between minLength and 1,000,000");
    }

    let triangles = 0;
    for (let shortest = minLength; shortest <= maxLength; shortest++) {
      for (let medium = shortest; medium <= maxLength; medium++) {
        const longestMaxLength = Math.min(shortest + medium - 1, maxLength);
        triangles += 1 + longestMaxLength - medium;

        if (triangles > 1000000000) {
          return -1;
        }
      }
    }

    return triangles;
  }
}

module.exports = TriCount;
