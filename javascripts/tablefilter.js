document$.subscribe(function() {
    var tables = document.querySelectorAll("article .filter table")
    tables.forEach(function(table) {
        var tf = new TableFilter(table, {
            base_path: "https://unpkg.com/tablefilter@0.7.2/dist/tablefilter/",
            filters_row_index: 1,
            themes: [{
                name: 'transparent'
            }],
            filters_cell_tag: 'th',
            col_2: 'none',
        })
        tf.init()
    })
  })