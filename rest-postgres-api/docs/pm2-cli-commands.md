## PM2 CLI Commands

Save processes:
```bash
pm2 save
```

Stop All Running Processes:
```bash
pm2 stop all
```

Delete All Processes:
```bash
pm2 delete all
```

See logs
```bash
pm2 logs rest-postgres-api
```

Remove the Dump File: This file (dump.pm2) stores the list of processes to be resurrected on restart.
```bash
pm2 save
rm ~/.pm2/dump.pm2
```

Kill the PM2 Daemon:
```bash
pm2 kill
```

See monit
```bash
pm2 monit
```

Kill process on port 3333
```bash
lsof -i tcp:3333
```
