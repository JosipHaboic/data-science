export namespace Unsupervised {

  /**
   * Bin data into k bins with interval strategy
   * @param {array} data - List of values
   * @param {number} k - Size of a bin
   * @returns {array} - Binned values into k bins
   */
  export function interval(data: number[], k: number): number[] {
    const intervalWidth = Math.ceil((data.length) / k);
    const bins = [];
    for (let i = 0; i < k; i += 1) {
        bins.push(data.slice(i * intervalWidth, (i + 1) * intervalWidth));
    }

    return bins;
  }

} // end namespace

// export namespace Supervised {}
