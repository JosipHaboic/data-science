export namespace Unsupervised {

  /**
   * Bin data into k bins
   * @param {array} data - List of values
   * @returns {array} - Binned values into k bins
   */
  export function interval(data: number[], k: number): number[] {
    const intervalWidth = Math.ceil((data.length) / k);
    const binns = [];
    for (let i = 0; i < k; i += 1) {
        binns.push(data.slice(i * intervalWidth, (i + 1) * intervalWidth));
    }

    return binns;
  }
}


// export namespace Supervised {}
