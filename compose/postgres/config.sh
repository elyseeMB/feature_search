#! /bin/sh

set -eu

psql -v ON_ERROR_STOP=1 -U $POSTGRES_USER <<- EOF
CREATE USER search;l
ALTER USER search WITH SUPERUSER;
ALTER USER search PASSWORD 'password';
CREATE DATABASE search_database;
GRANT ALL PRILIVEGES ON DATABASE search_database TO search;
EOF

psql -v ON_ERROR_STOP=1 $POSTGRES_USER -d search_database <<-EOF
ALTER SCHEMA public OWNER TO search;
GRANT ALL ON SCHEMA public TO search;
EOF
