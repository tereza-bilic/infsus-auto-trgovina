#!/bin/bash

# Remove the existing init.sql file
rm -f init.sql

# Create an empty merged.sql file
touch init.sql

# Loop through all SQL files in the scripts folder
for file in sql_scripts/*.sql
do
  # Concatenate each file's contents into merged.sql
  cat $file >> init.sql
done

echo "All SQL scripts merged into init.sql"

