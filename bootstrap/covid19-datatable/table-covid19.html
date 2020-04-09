<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>COVID-19 by Country and Territory</title>
    <link href="https://unpkg.com/bootstrap@4.4.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" rel="stylesheet">
    <link href="https://unpkg.com/bootstrap-table@1.16.0/dist/bootstrap-table.min.css" rel="stylesheet">
</head>
<body>

    <div class="container-fluid mt-2">
        <div id="toolbar">
          <h3>COVID-19 by Country and Territory</h3>
        </div>
        <table
            id="table"
            data-toolbar="#toolbar"
            data-search="true"
            data-show-toggle="true"
            data-show-columns="true"
            data-show-columns-toggle-all="true"
            data-show-export="true"
            data-sort-name="totalcases"
            data-sort-order="desc"
            data-show-pagination-switch="true"
            data-pagination="false"
            data-page-list="[10, 25, 50, 100, all]"
            data-show-footer="true">
        </table>
    </div>

    <script src="https://unpkg.com/jquery@3.4.1/dist/jquery.min.js"></script>
    <script src="https://unpkg.com/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/bootstrap@4.4.1/dist/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/bootstrap-table@1.16.0/dist/bootstrap-table.min.js"></script>
    <script src="https://unpkg.com/bootstrap-table@1.16.0/dist/bootstrap-table-locale-all.min.js"></script>
    <script src="https://unpkg.com/tableexport.jquery.plugin/tableExport.min.js"></script>
    <script src="https://unpkg.com/bootstrap-table@1.16.0/dist/extensions/export/bootstrap-table-export.min.js"></script>
    <script>
        axios.get('https://api.covid19api.com/summary').then(function (response) {
            var rawData = myData(response.data.Countries);
            myTable(rawData);
        }).catch(function (error) {
            console.log(error);
        })
        
        function myData(data) {
            var list = [];
            data.forEach(function(item) {
                list.push({
                    country: '<img src="flags/'+item.CountryCode.toLowerCase()+'.svg" width="36"> ' + item.Country, //github.com/rinvex/countries
                    newcases: item.NewConfirmed,
                    totalcases: item.TotalConfirmed,
                    newdeaths: item.NewDeaths,
                    totaldeaths: item.TotalDeaths,
                    newrecoveries: item.NewRecovered,
                    totalrecoveries: item.TotalRecovered,
                    lastupdate: new Date(item.Date).getDate()+'/'+new Date(item.Date).getMonth()+'/'+new Date(item.Date).getFullYear() //.toLocaleString()
                });
            });
            return list;
        }
      
        function myTable(arr) {
            var myTable = $('#table').bootstrapTable({
                height: 600,
                locale: 'en_US',
                columns: [
                    [
                        {field:'country', title:'Countries and territories', rowspan:2, align:'left', valign:'middle', footerFormatter:countFormatter}, 
                        {title:'Confirmed infections', colspan:2, align:'center', valign:'middle'}, 
                        {title:'Confirmed deaths', colspan:2, align:'center', valign:'middle'}, 
                        {title:'Reported recoveries', colspan:2, align:'center', valign:'middle'}, 
                        {field:'lastupdate', title:'Date', rowspan:2, align:'center', valign:'middle'}
                    ],
                    [
                        {field:'newcases', title:'New Cases',sortable:true, align:'right', formatter:numberFormatter, footerFormatter:totalFormatter},
                        {field:'totalcases', title:'Total Cases',sortable:true, align:'right', formatter:numberFormatter, footerFormatter:totalFormatter}, 
                        {field:'newdeaths', title:'New Deaths', sortable:true, align:'right', formatter:numberFormatter, footerFormatter:totalFormatter}, 
                        {field:'totaldeaths', title:'Total Deaths', sortable:true, align:'right', formatter:numberFormatter, footerFormatter:totalFormatter}, 
                        {field:'newrecoveries', title:'New Recovered', sortable:true, align:'right', formatter:numberFormatter, footerFormatter:totalFormatter}, 
                        {field:'totalrecoveries', title:'Total Recovered', sortable:true, align:'right', formatter:numberFormatter, footerFormatter: totalFormatter}
                    ]
                ],
                data: arr
            });
            return myTable;
        }
        
        function countFormatter(data) {
            return data.length
        }
        
        function numberFormatter(value, row){
            return value.toLocaleString('en-US');
        }

        function totalFormatter(data) {
            var field = this.field
            var total = data.map(function (row) {
                return row[field]
            }).reduce(function (sum, i) {
                return sum + i
            }, 0);
            return total.toLocaleString('en-US');
        }
    </script>
</body>
</html>
