# swiss-cities
Provides a list of swiss cities based on data from [bfs.admin.ch](http://www.bfs.admin.ch/bfs/portal/de/index/infothek/nomenklaturen/blank/blank/gem_liste/04.html).

## Installation
`npm install swiss-cities`

## Usage
Exports all data in `swissCities`.

## How to Update based on new Data
1. Download current list from [bfs.admin.ch](http://www.bfs.admin.ch/bfs/portal/de/index/infothek/nomenklaturen/blank/blank/gem_liste/04.html)
2. Open the Excel file and navigate to the tab _Ortschaftenverz.-Rép. Localités_
3. Export as CSV. Select Unicode (UTF-8) and use tab as a separator. Don't use a text delimiter.
4. `node convert-csv.js`.
5. Commit and publish.

