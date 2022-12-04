---
layout: post
title: Flush contenttypes and auth permissions in Django
date: 2022-12-04 11:04
categories:
  - Ressources
tags:
  - Free Things
---

I was trying to migrate from MySQL to PostgreSQL using loaddata and dumpdata. For this to work, everything needs to be flushed,
but the command:

```
python manage.py sqlflush --database=postgresql
```

Flush everything except the contenttypes and a few other (mainly auth related) tables.

So we inevitably end up with conflicts and errors:
```
IntegrityError: (1062, "Duplicate entry '...' for key 2")
```



The solution is to manually run the SQL in the postgres shell:

```
TRUNCATE "django_content_type" CASCADE;
```

We use CASCADE because django_content_type referenced in a foreign key constraint in auth_permission, which is referenced in auth_group_permissions, etc.


##### Note:
Access the postgres shell with the Django management command:
```
python manage.py dbshell --database=postgresql
```
Unless you are in an environment where you don't have access to psql such as Docker. 

In Docker you would run:
```
# Get the CONTAINER ID of postgresql
docker ps

# Open a bash
docker exec -it 04cd7d7c20e9 bash

# Invoke the database shell
psql -U postgres

# Run the command 
TRUNCATE "django_content_type" CASCADE;
```