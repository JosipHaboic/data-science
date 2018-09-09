# data-science

## Data science library

---

* Statistics
  * Summary statictics
  * Dispersion statistics
* Data Transformation
  * Binning
  * Encoding - TODO
* Data Cleansing
  * Filters - TODO
* Common function
  * TODO

---

### How To: Docs

**Note**: Docs are already builded in this repository so you can skip build part and just serve them, but if you want to change the looks or add something in your local copy then you need to do build step first.

You first need to install typedoc:

``` bash
npm install -g typedoc
```

Then you need to run npm build script:

``` bash
npm run docs:build
```

And finally you need to start serving the docs with local http server, script uses as default http-server:

``` bash
npm run docs:serve
```

Now open your web broweser and go to this address:

``` bash
localhost:4000
```