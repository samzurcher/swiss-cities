# swiss-cities
Provides a list of swiss cities based on data from [bfs.admin.ch](http://www.bfs.admin.ch/bfs/portal/de/index/infothek/nomenklaturen/blank/blank/gem_liste/04.html).

## Installation
`npm install swiss-cities`

## Usage
Exports all data in `allSwissCities()` and `randomSampleOfSwissCities()`.

## How to Update based on new Data
1. Download current list from [bfs.admin.ch](http://www.bfs.admin.ch/bfs/portal/de/index/infothek/nomenklaturen/blank/blank/gem_liste/04.html)
2. Open the Excel file and navigate to the tab _Ortschaftenverz.-Rép. Localités_
3. Export as CSV. Select Unicode (UTF-8) and use tab as a separator. Don't use a text delimiter.
3. Download the list of principle languages per village from
  https://www.pxweb.bfs.admin.ch/Table.aspx?layout=tableViewLayout2&px_tableid=px-x-4003000000_123%5cpx-x-4003000000_123.px&px_language=de&px_type=PX&px_db=px-x-4003000000_123&rxid=f325e97e-e21c-4805-b3cd-04d68e5321d7
  as Excel.
4. Export the data including the header row as a CSV; ensure UTF8.
5. `node convert-csv.js`.
6. Commit and publish.

