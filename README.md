# Liên Quân Backend

This repository is writing for Arena of Valor International Championship 2019, to get data via API and Admin can modification of the data via API provided.

## Description

In this project I used Knex (Query Builder), MySQL, JsonWebToken (Authentication), Model-Service-Controller design pattern, and used Bullmq to manage Queue data.

## Requiments

- Node v16
- MySQL 8.0
- Redis

## Rebuild todo list

- [x] Admin authentication
- [x] refresh token api
- [x] Homepage
- [x] Prize page
- [x] News page
- [x] Events page
- [x] Teams page
- [x] Photos & Videos
- [x] Implement Knexjs for Query Builder
- [x] Implement JWT for Authentication
- [x] Implement throttle requests
- [x] Forgot password, ideally, use redis and bullmq for make queue. We could do asynchronous for send mail but it can't handle errors when send email failed.
- [x] Implement Upload image API
- [x] Refactor query builder to repository for clean code
- [x] Refactor controllers for to not "reinvent the wheel"
- [x] Implement Dependency Injection use Decorator
- [x] Implement Controller use Decorator
- [x] Implement Service Providers
- [x] Implement Cache Decorator use Redis
- [x] Use Decorators of Typescript for more readable and reusable

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
